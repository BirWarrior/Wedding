/**
 * Multi-language support for Wedding Invitation
 * Languages: German (de), English (en), Swedish (sv)
 */

const translations = {
    de: {
        // Meta
        pageTitle: 'Hochzeitseinladung',
        pageDescription: 'Hochzeitseinladung für Arezoo Kohestani & Chabir Akramyar - 19. Juli 2026',
        
        // Date and Time
        date: '19. Juli 2026',
        time: '17:00 Uhr',
        
        // Invitation Text
        invitationText: 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!',
        locationName: 'Le Royale',
        locationAddress: 'Hermann-Buck-Weg 9, 22309 Hamburg',
        
        // RSVP Section
        rsvpTitle: 'RSVP',
        rsvpSubtitle: 'Bitte antworte bis zum 15. Juni 2026',
        
        // Form Labels
        nameLabel: 'Dein Name',
        namePlaceholder: 'Vor- und Nachname',
        attendingLabel: 'Kommst du?',
        btnYes: 'Ja, ich komme',
        btnNo: 'Leider nicht',
        guestCountLabel: 'Anzahl der Gäste',
        person1: '1 Person',
        person2: '2 Personen',
        person3: '3 Personen',
        person4: '4 Personen',
        submitBtn: 'RSVP absenden',
        sending: 'Wird gesendet...',
        
        // Thank You Messages
        thankYouTitle: 'Vielen Dank!',
        thankYouDefault: 'Deine Antwort wurde gespeichert.',
        thankYouAlreadySubmitted: 'Du hast bereits geantwortet.',
        thankYouHoneypot: 'Vielen Dank für deine Antwort!',
        thankYouYesSingle: 'Wunderbar! Wir freuen uns auf dich!',
        thankYouYesMultiple: 'Wunderbar! Wir freuen uns auf euch!',
        thankYouNo: 'Schade, dass du nicht dabei sein kannst.',
        subtitleYesSingle: 'Schön, dass du dabei bist!',
        subtitleYesMultiple: 'Schön, dass ihr dabei seid!',
        subtitleNo: 'Wir werden dich vermissen!',
        
        // Error Messages
        errorNameRequired: 'Bitte gib deinen Namen ein.',
        errorResponseRequired: 'Bitte wähle, ob du kommst oder nicht.',
        errorSubmission: 'Es gab einen Fehler. Bitte versuche es später erneut.',
        
        // Footer
        footerContact: 'Bei Fragen erreichst du uns unter:'
    },
    
    en: {
        // Meta
        pageTitle: 'Wedding Invitation',
        pageDescription: 'Wedding invitation for Arezoo Kohestani & Chabir Akramyar - July 19, 2026',
        
        // Date and Time
        date: 'July 19, 2026',
        time: '5:00 PM',
        
        // Invitation Text
        invitationText: 'We are delighted to invite you to our wedding!',
        locationName: 'Le Royale',
        locationAddress: 'Hermann-Buck-Weg 9, 22309 Hamburg',
        
        // RSVP Section
        rsvpTitle: 'RSVP',
        rsvpSubtitle: 'Please respond by June 15, 2026',
        
        // Form Labels
        nameLabel: 'Your Name',
        namePlaceholder: 'First and Last Name',
        attendingLabel: 'Will you attend?',
        btnYes: 'Yes, I will attend',
        btnNo: 'Sorry, I cannot',
        guestCountLabel: 'Number of Guests',
        person1: '1 Person',
        person2: '2 People',
        person3: '3 People',
        person4: '4 People',
        submitBtn: 'Submit RSVP',
        sending: 'Sending...',
        
        // Thank You Messages
        thankYouTitle: 'Thank You!',
        thankYouDefault: 'Your response has been saved.',
        thankYouAlreadySubmitted: 'You have already responded.',
        thankYouHoneypot: 'Thank you for your response!',
        thankYouYesSingle: 'Wonderful! We look forward to seeing you!',
        thankYouYesMultiple: 'Wonderful! We look forward to seeing you all!',
        thankYouNo: 'We are sorry you cannot make it.',
        subtitleYesSingle: 'Great to have you there!',
        subtitleYesMultiple: 'Great to have you all there!',
        subtitleNo: 'We will miss you!',
        
        // Error Messages
        errorNameRequired: 'Please enter your name.',
        errorResponseRequired: 'Please select whether you will attend.',
        errorSubmission: 'There was an error. Please try again later.',
        
        // Footer
        footerContact: 'For questions, reach us at:'
    },
    
    sv: {
        // Meta
        pageTitle: 'Bröllopsinbjudan',
        pageDescription: 'Bröllopsinbjudan för Arezoo Kohestani & Chabir Akramyar - 19 juli 2026',
        
        // Date and Time
        date: '19 juli 2026',
        time: 'Kl. 17:00',
        
        // Invitation Text
        invitationText: 'Vi är glada att bjuda in er till vårt bröllop!',
        locationName: 'Le Royale',
        locationAddress: 'Hermann-Buck-Weg 9, 22309 Hamburg',
        
        // RSVP Section
        rsvpTitle: 'OSA',
        rsvpSubtitle: 'Vänligen svara senast 15 juni 2026',
        
        // Form Labels
        nameLabel: 'Ditt Namn',
        namePlaceholder: 'För- och efternamn',
        attendingLabel: 'Kommer du?',
        btnYes: 'Ja, jag kommer',
        btnNo: 'Tyvärr inte',
        guestCountLabel: 'Antal Gäster',
        person1: '1 Person',
        person2: '2 Personer',
        person3: '3 Personer',
        person4: '4 Personer',
        submitBtn: 'Skicka OSA',
        sending: 'Skickar...',
        
        // Thank You Messages
        thankYouTitle: 'Tack!',
        thankYouDefault: 'Ditt svar har sparats.',
        thankYouAlreadySubmitted: 'Du har redan svarat.',
        thankYouHoneypot: 'Tack för ditt svar!',
        thankYouYesSingle: 'Underbart! Vi ser fram emot att se dig!',
        thankYouYesMultiple: 'Underbart! Vi ser fram emot att se er!',
        thankYouNo: 'Vi är ledsna att du inte kan komma.',
        subtitleYesSingle: 'Kul att du är med!',
        subtitleYesMultiple: 'Kul att ni är med!',
        subtitleNo: 'Vi kommer att sakna dig!',
        
        // Error Messages
        errorNameRequired: 'Vänligen ange ditt namn.',
        errorResponseRequired: 'Vänligen välj om du kommer.',
        errorSubmission: 'Ett fel uppstod. Försök igen senare.',
        
        // Footer
        footerContact: 'Vid frågor, kontakta oss:'
    },

    fa: {
        // Meta
        pageTitle: 'دعوتنامه عروسی',
        pageDescription: 'دعوتنامه عروسی آرزو کوهستانی و چابیر اکرامیار - ۱۹ ژوئیه ۲۰۲۶',
        
        // Date and Time
        date: '۱۹ ژوئیه ۲۰۲۶',
        time: 'ساعت ۱۷:۰۰',
        
        // Invitation Text
        invitationText: 'با کمال افتخار شما را به جشن عروسی خود دعوت می‌کنیم!',
        locationName: 'Le Royale',
        locationAddress: 'Hermann-Buck-Weg 9, 22309 Hamburg',
        
        // RSVP Section
        rsvpTitle: 'پاسخ دعوت',
        rsvpSubtitle: 'لطفاً تا ۱۵ ژوئن ۲۰۲۶ پاسخ دهید',
        
        // Form Labels
        nameLabel: 'نام شما',
        namePlaceholder: 'نام و نام خانوادگی',
        attendingLabel: 'آیا شرکت می‌کنید؟',
        btnYes: 'بله، شرکت می‌کنم',
        btnNo: 'متأسفانه نه',
        guestCountLabel: 'تعداد مهمانان',
        person1: '۱ نفر',
        person2: '۲ نفر',
        person3: '۳ نفر',
        person4: '۴ نفر',
        submitBtn: 'ارسال پاسخ',
        sending: 'در حال ارسال...',
        
        // Thank You Messages
        thankYouTitle: 'با تشکر!',
        thankYouDefault: 'پاسخ شما ثبت شد.',
        thankYouAlreadySubmitted: 'شما قبلاً پاسخ داده‌اید.',
        thankYouHoneypot: 'با تشکر از پاسخ شما!',
        thankYouYesSingle: 'عالی! منتظر دیدار شما هستیم!',
        thankYouYesMultiple: 'عالی! منتظر دیدار شما هستیم!',
        thankYouNo: 'متأسفیم که نمی‌توانید شرکت کنید.',
        subtitleYesSingle: 'خوشحالیم که می‌آیید!',
        subtitleYesMultiple: 'خوشحالیم که می‌آیید!',
        subtitleNo: 'دلتنگ شما خواهیم شد!',
        
        // Error Messages
        errorNameRequired: 'لطفاً نام خود را وارد کنید.',
        errorResponseRequired: 'لطفاً انتخاب کنید که آیا شرکت می‌کنید.',
        errorSubmission: 'خطایی رخ داد. لطفاً بعداً دوباره تلاش کنید.',
        
        // Footer
        footerContact: 'برای سوالات با ما تماس بگیرید:'
    }
};

// Current language (default: German)
let currentLang = localStorage.getItem('wedding_lang') || 'de';
let languageInitialized = false;

// Get translation
function t(key) {
    return translations[currentLang][key] || translations['de'][key] || key;
}

// Switch language
function switchLanguage(lang) {
    if (!translations[lang]) return;
    
    currentLang = lang;
    localStorage.setItem('wedding_lang', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Handle RTL for Persian
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    
    // Update page title and meta
    document.title = t('pageTitle');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.content = t('pageDescription');
    }
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        
        if (element.tagName === 'INPUT' && element.type !== 'hidden') {
            // Update placeholder for input fields
            if (element.hasAttribute('placeholder')) {
                element.placeholder = t(key);
            }
        } else if (element.tagName === 'OPTION') {
            element.textContent = t(key);
        } else {
            // Update text content, preserving HTML structure
            element.innerHTML = t(key);
        }
    });
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Dispatch custom event for language change
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

// Initialize language on page load
function initLanguage() {
    if (languageInitialized) return;
    languageInitialized = true;
    switchLanguage(currentLang);
    
    const menu = document.getElementById('language-menu');
    const toggle = document.getElementById('lang-toggle');
    const dropdown = document.getElementById('lang-dropdown');

    const closeMenu = () => {
        if (!dropdown || !toggle) return;
        dropdown.hidden = true;
        toggle.setAttribute('aria-expanded', 'false');
    };

    if (toggle && dropdown) {
        toggle.addEventListener('click', (event) => {
            event.stopPropagation();
            const isOpen = dropdown.hidden === false;
            dropdown.hidden = isOpen;
            toggle.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
        });
    }

    // Add click event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            switchLanguage(btn.dataset.lang);
            closeMenu();
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (menu && !menu.contains(event.target)) {
            closeMenu();
        }
    });

    // Close on Escape
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });
}

// Export for use in other scripts
window.i18n = {
    t,
    switchLanguage,
    getCurrentLang: () => currentLang,
    initLanguage
};

// Auto-initialize when DOM is ready (fallback)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
} else {
    initLanguage();
}
