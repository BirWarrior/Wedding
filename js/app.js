/**
 * Wedding Invitation - RSVP Form Handler
 * Handles form submission to Google Apps Script
 */

(function() {
    'use strict';

    // ========================================
    // Configuration
    // ========================================
    
    // IMPORTANT: Replace this URL with your Google Apps Script Web App URL
    // See README.md for setup instructions
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx5A0d9SD6nQvmLLAKJfEcN9IMb4aX8O2UAVc3NTpI4CpSCDrXvszvyENpFJphyGAOt/exec";
    
    // Timeout for form submission (in milliseconds)
    const SUBMIT_TIMEOUT = 15000; // 15 seconds
    
    // Local storage key to track if user already submitted
    const STORAGE_KEY = 'wedding_rsvp_submitted';

    // ========================================
    // DOM Elements
    // ========================================
    
    const form = document.getElementById('rsvp-form');
    const btnYes = document.getElementById('btn-yes');
    const btnNo = document.getElementById('btn-no');
    const rsvpResponse = document.getElementById('rsvp-response');
    const guestCountGroup = document.getElementById('guest-count-group');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    const errorMessage = document.getElementById('error-message');
    const rsvpSection = document.getElementById('rsvp-section');
    const thankYouSection = document.getElementById('thank-you-section');
    const thankYouMessage = document.getElementById('thank-you-message');

    // ========================================
    // State
    // ========================================
    
    let selectedResponse = null;

    // ========================================
    // Initialize
    // ========================================
    
    function init() {
        // Check if user already submitted RSVP
        if (hasAlreadySubmitted()) {
            showThankYouMessage(window.i18n.t('thankYouAlreadySubmitted'), null, false);
            return;
        }

        // Add event listeners
        btnYes.addEventListener('click', () => selectResponse('yes'));
        btnNo.addEventListener('click', () => selectResponse('no'));
        form.addEventListener('submit', handleSubmit);
    }

    // ========================================
    // RSVP Button Selection
    // ========================================
    
    function selectResponse(response) {
        selectedResponse = response;
        rsvpResponse.value = response;
        
        // Update button states
        btnYes.classList.toggle('selected', response === 'yes');
        btnNo.classList.toggle('selected', response === 'no');
        
        // Show/hide guest count based on response
        if (response === 'yes') {
            guestCountGroup.style.display = 'block';
        } else {
            guestCountGroup.style.display = 'none';
        }
        
        // Enable submit button
        updateSubmitButton();
    }

    function updateSubmitButton() {
        const nameInput = document.getElementById('guest-name');
        const isValid = nameInput.value.trim() !== '' && selectedResponse !== null;
        submitBtn.disabled = !isValid;
    }

    // ========================================
    // Form Submission
    // ========================================
    
    async function handleSubmit(event) {
        event.preventDefault();
        
        // Validate
        if (!validateForm()) {
            return;
        }
        
        // Check honeypot (spam protection)
        const honeypot = form.querySelector('input[name="website"]');
        if (honeypot && honeypot.value !== '') {
            // Likely a bot, silently "succeed"
            showThankYouMessage(window.i18n.t('thankYouHoneypot'));
            return;
        }
        
        // Show loading state
        setLoading(true);
        hideError();
        
        // Gather form data
        const formData = {
            name: document.getElementById('guest-name').value.trim(),
            rsvp: selectedResponse,
            guestCount: selectedResponse === 'yes' ? 
                document.getElementById('guest-count').value : '0',
            timestamp: new Date().toISOString()
        };
        
        try {
            // Submit to Google Apps Script
            const response = await submitWithTimeout(formData);
            
            if (response.result === 'success') {
                // Mark as submitted
                markAsSubmitted();
                
                // Show thank you message based on response
                if (selectedResponse === 'yes') {
                    const isMultiple = formData.guestCount > 1;
                    const message = window.i18n.t(isMultiple ? 'thankYouYesMultiple' : 'thankYouYesSingle');
                    const subtitle = window.i18n.t(isMultiple ? 'subtitleYesMultiple' : 'subtitleYesSingle');
                    showThankYouMessage(message, subtitle);
                } else {
                    showThankYouMessage(window.i18n.t('thankYouNo'), window.i18n.t('subtitleNo'));
                }
            } else {
                throw new Error(response.error || 'Submission failed');
            }
        } catch (error) {
            console.error('RSVP submission error:', error);
            showError(window.i18n.t('errorSubmission'));
            setLoading(false);
        }
    }

    async function submitWithTimeout(data) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), SUBMIT_TIMEOUT);
        
        try {
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Required for Google Apps Script
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                signal: controller.signal
            });
            
            clearTimeout(timeoutId);
            
            // With 'no-cors', we can't read the response
            // So we assume success if no error was thrown
            return { result: 'success' };
        } catch (error) {
            clearTimeout(timeoutId);
            
            if (error.name === 'AbortError') {
                throw new Error('Request timed out');
            }
            throw error;
        }
    }

    // ========================================
    // Validation
    // ========================================
    
    function validateForm() {
        const nameInput = document.getElementById('guest-name');
        
        if (nameInput.value.trim() === '') {
            showError(window.i18n.t('errorNameRequired'));
            nameInput.focus();
            return false;
        }
        
        if (selectedResponse === null) {
            showError(window.i18n.t('errorResponseRequired'));
            return false;
        }
        
        return true;
    }

    // ========================================
    // UI Helpers
    // ========================================
    
    function setLoading(isLoading) {
        submitBtn.disabled = isLoading;
        btnText.style.display = isLoading ? 'none' : 'block';
        btnLoading.style.display = isLoading ? 'flex' : 'none';
        
        // Disable form inputs during loading
        const inputs = form.querySelectorAll('input, select, button');
        inputs.forEach(input => {
            if (input !== submitBtn) {
                input.disabled = isLoading;
            }
        });
    }

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }

    function hideError() {
        errorMessage.style.display = 'none';
    }

    function showThankYouMessage(message, subtitle, animate = true) {
        thankYouMessage.textContent = message;
        
        // Update or hide subtitle
        const subtitleElement = document.getElementById('thank-you-subtitle');
        if (subtitleElement) {
            if (subtitle) {
                subtitleElement.textContent = subtitle;
                subtitleElement.style.display = 'block';
            } else {
                subtitleElement.style.display = 'none';
            }
        }
        
        if (animate) {
            rsvpSection.style.opacity = '0';
            rsvpSection.style.transition = 'opacity 0.3s ease';
            
            setTimeout(() => {
                rsvpSection.style.display = 'none';
                thankYouSection.style.display = 'block';
            }, 300);
        } else {
            rsvpSection.style.display = 'none';
            thankYouSection.style.display = 'block';
        }
    }

    // ========================================
    // Local Storage (Prevent Duplicate Submissions)
    // ========================================
    
    function hasAlreadySubmitted() {
        try {
            return localStorage.getItem(STORAGE_KEY) === 'true';
        } catch (e) {
            // localStorage might be blocked
            return false;
        }
    }

    function markAsSubmitted() {
        try {
            localStorage.setItem(STORAGE_KEY, 'true');
        } catch (e) {
            // localStorage might be blocked, ignore
        }
    }

    // ========================================
    // Input Event Listeners
    // ========================================
    
    // Enable submit button when name is entered
    document.getElementById('guest-name').addEventListener('input', updateSubmitButton);

    // ========================================
    // Start App
    // ========================================
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            // Initialize language first
            if (window.i18n && window.i18n.initLanguage) {
                window.i18n.initLanguage();
            }
            // Then initialize form
            init();
        });
            // Initialize language first
            if (window.i18n && window.i18n.initLanguage) {
                window.i18n.initLanguage();
            }
            // Then initialize form
    } else {
        init();
    }

})();
