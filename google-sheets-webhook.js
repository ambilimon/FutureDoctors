// Google Apps Script code to handle form submissions
// Deploy this as a Web App in Google Apps Script

const SPREADSHEET_ID = ''; // Add your Google Sheets ID here
const SHEET_NAMES = {
  inquiry: 'Student Inquiries',
  callback: 'Callback Requests',
  application: 'Country Applications',
  webinar: 'Webinar Signups'
};

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    const { formType } = data;
    
    // Get the appropriate sheet
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName(SHEET_NAMES[formType]);
    
    if (!sheet) {
      throw new Error(`Sheet not found for form type: ${formType}`);
    }
    
    // Get headers if they exist, or create them if they don't
    let headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    if (headers.length === 0 || headers[0] === '') {
      headers = getHeadersForFormType(formType);
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    }
    
    // Prepare row data
    const rowData = headers.map(header => data[header] || '');
    
    // Append the data
    sheet.appendRow(rowData);
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Data successfully recorded'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function getHeadersForFormType(formType) {
  const commonHeaders = ['timestamp', 'status', 'name', 'email', 'phone', 'message'];
  
  switch (formType) {
    case 'inquiry':
      return [
        ...commonHeaders,
        'preferredCountries',
        'lastAttendedCollege'
      ];
      
    case 'callback':
      return [
        ...commonHeaders,
        'preferredTime',
        'requestType'
      ];
      
    case 'application':
      return [
        ...commonHeaders,
        'lastAttendedCollege',
        'neetScore',
        'countryName',
        'universityId'
      ];
      
    case 'webinar':
      return [
        ...commonHeaders,
        'webinarId',
        'webinarTitle'
      ];
      
    default:
      throw new Error(`Unknown form type: ${formType}`);
  }
} 