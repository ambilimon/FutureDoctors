import axios from 'axios';

// Types for different form submissions
interface BaseFormData {
  timestamp: string;
  status: string;
}

export interface StudentInquiryData extends BaseFormData {
  name: string;
  email: string;
  phone: string;
  preferredCountries?: string[];
  message?: string;
  lastAttendedCollege?: string;
}

export interface CallbackRequestData extends BaseFormData {
  name: string;
  email: string;
  phone: string;
  message?: string;
  preferredTime?: string;
  requestType: string;
}

export interface CountryApplicationData extends BaseFormData {
  fullName: string;
  email: string;
  phone: string;
  lastAttendedCollege: string;
  neetScore: string;
  message?: string;
  countryName: string;
  universityId?: string;
}

export interface WebinarSignupData extends BaseFormData {
  name: string;
  email: string;
  phone: string;
  webinarId: string;
  webinarTitle: string;
}

// Google Sheets submission function
export async function submitToGoogleSheets(
  formData: StudentInquiryData | CallbackRequestData | CountryApplicationData | WebinarSignupData,
  formType: 'inquiry' | 'callback' | 'application' | 'webinar'
) {
  try {
    // Your Google Sheets Web App URL (you'll need to replace this with your actual URL)
    const GOOGLE_SHEETS_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL;
    
    if (!GOOGLE_SHEETS_URL) {
      throw new Error('Google Sheets webhook URL not configured');
    }

    // Add metadata
    const dataToSubmit = {
      ...formData,
      formType,
      submittedAt: new Date().toISOString(),
    };

    // Submit to Google Sheets
    const response = await axios.post(GOOGLE_SHEETS_URL, dataToSubmit);

    if (response.status !== 200) {
      throw new Error('Failed to submit to Google Sheets');
    }

    return { success: true };
  } catch (error) {
    console.error('[Google Sheets Submission Error]:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    };
  }
} 