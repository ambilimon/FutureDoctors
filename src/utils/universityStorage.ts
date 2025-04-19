import { universities } from '@/data/universities';
import { University } from '@/types/university';

// Function to initialize university data in localStorage
export const initializeUniversityData = () => {
  // Check if data is already in localStorage to avoid overwriting
  if (!localStorage.getItem('universities')) {
    // Format universities for storage
    const formattedUniversities = universities.map(uni => {
      // Convert tuitionFee to tuitionRange string format
      const tuitionRange = uni.tuitionFee && uni.tuitionFee.amount !== undefined
        ? `${uni.tuitionFee.currency || '$'}${(uni.tuitionFee.amount || 0).toLocaleString()} / year` 
        : "Contact for fees";
      
      return {
        ...uni,
        tuitionRange,
        // Ensure location includes city and country if not already provided
        location: uni.location || `${uni.city}, ${uni.country}`
      } as University;
    });
    
    // Save to localStorage
    localStorage.setItem('universities', JSON.stringify(formattedUniversities));
    console.log('Universities data initialized in localStorage');
  }
}; 