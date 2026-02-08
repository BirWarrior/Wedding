/**
 * Google Apps Script for Wedding RSVP
 * 
 * SETUP INSTRUCTIONS:
 * 1. Open your Google Sheet
 * 2. Go to Extensions → Apps Script
 * 3. Delete any existing code and paste this entire file
 * 4. Save (Ctrl/Cmd + S)
 * 5. Deploy → New deployment → Web app
 * 6. Execute as: Me, Access: Anyone
 * 7. Copy the deployment URL and add it to js/app.js
 */

// Configuration
const SHEET_NAME = 'Tabellenblatt1'; // Change if your sheet has a different name

/**
 * Handles POST requests from the wedding website
 */
function doPost(e) {
  try {
    // Get the active spreadsheet and sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      return createResponse({ result: 'error', error: 'Sheet not found' });
    }
    
    // Parse the incoming data
    let data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (parseError) {
      return createResponse({ result: 'error', error: 'Invalid JSON data' });
    }
    
    // Validate required fields
    if (!data.name || !data.rsvp) {
      return createResponse({ result: 'error', error: 'Missing required fields' });
    }
    
    // Normalize name for comparison (trim and lowercase)
    const normalizedName = data.name.trim().toLowerCase();
    
    // Check for existing entry with same name
    const existingRow = findExistingEntry(sheet, normalizedName);
    
    // Create timestamp
    const timestamp = new Date();
    
    // Prepare row data
    const rowData = [
      timestamp,                          // Column A: Timestamp
      data.name.trim(),                   // Column B: Name
      data.rsvp === 'yes' ? 'Ja' : 'Nein', // Column C: RSVP
      data.rsvp === 'yes' ? (data.guestCount || '1') : '0', // Column D: Guest Count
      JSON.stringify(data)                // Column E: Raw data (for debugging)
    ];
    
    if (existingRow > 0) {
      // Update existing row instead of adding duplicate
      const range = sheet.getRange(existingRow, 1, 1, rowData.length);
      range.setValues([rowData]);
      return createResponse({ result: 'success', updated: true });
    } else {
      // Append new row
      sheet.appendRow(rowData);
      return createResponse({ result: 'success', updated: false });
    }
    
  } catch (error) {
    // Log error for debugging
    console.error('RSVP Error:', error);
    return createResponse({ result: 'error', error: error.message });
  }
}

/**
 * Find existing entry by name (case-insensitive)
 * Returns row number if found, 0 if not found
 */
function findExistingEntry(sheet, normalizedName) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return 0; // No data rows (only header)
  
  // Get all names from column B (starting from row 2 to skip header)
  const nameRange = sheet.getRange(2, 2, lastRow - 1, 1);
  const names = nameRange.getValues();
  
  for (let i = 0; i < names.length; i++) {
    const existingName = (names[i][0] || '').toString().trim().toLowerCase();
    if (existingName === normalizedName) {
      return i + 2; // +2 because array is 0-indexed and we start from row 2
    }
  }
  
  return 0; // Not found
}

/**
 * Handles GET requests - returns RSVP statistics
 */
function doGet(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      return createResponse({ result: 'error', error: 'Sheet not found' });
    }
    
    const lastRow = sheet.getLastRow();
    
    // If no data (only header or empty), return zeros
    if (lastRow < 2) {
      return createResponse({
        result: 'success',
        totalRsvps: 0,
        yesCount: 0,
        noCount: 0,
        yesPercentage: 0,
        noPercentage: 0,
        totalGuests: 0,
        timestamp: new Date().toISOString()
      });
    }
    
    // Get RSVP responses (column C) and guest counts (column D)
    const rsvpRange = sheet.getRange(2, 3, lastRow - 1, 2);
    const data = rsvpRange.getValues();
    
    let yesCount = 0;
    let noCount = 0;
    let totalGuests = 0;
    
    data.forEach(row => {
      const rsvp = row[0].toString().trim();
      const guestCount = parseInt(row[1]) || 0;
      
      if (rsvp === 'Ja') {
        yesCount++;
        totalGuests += guestCount;
      } else if (rsvp === 'Nein') {
        noCount++;
      }
    });
    
    const totalRsvps = yesCount + noCount;
    const yesPercentage = totalRsvps > 0 ? Math.round((yesCount / totalRsvps) * 100) : 0;
    const noPercentage = totalRsvps > 0 ? Math.round((noCount / totalRsvps) * 100) : 0;
    
    return createResponse({
      result: 'success',
      totalRsvps: totalRsvps,
      yesCount: yesCount,
      noCount: noCount,
      yesPercentage: yesPercentage,
      noPercentage: noPercentage,
      totalGuests: totalGuests,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Stats Error:', error);
    return createResponse({ result: 'error', error: error.message });
  }
}

/**
 * Creates a JSON response with CORS headers
 */
function createResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Test function - run this to verify the script works
 * Go to Run → testPost to test
 */
function testPost() {
  const testEvent = {
    postData: {
      contents: JSON.stringify({
        name: 'Test Guest',
        rsvp: 'yes',
        guestCount: '2',
        timestamp: new Date().toISOString()
      })
    }
  };
  
  const result = doPost(testEvent);
  console.log('Test result:', result.getContent());
}
