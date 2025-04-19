
import { supabase } from './supabase';
import { toast } from '@/components/ui/use-toast';

// Define types for database operations
export interface University {
  id: number;
  name: string;
  country: string;
  city: string;
  tuitionFee: number;
  currency: string;
  image: string;
  facilities: string[];
  rating: number;
  category: string;
  description?: string;
  establishedYear?: number;
  website?: string;
  contactEmail?: string;
  contactPhone?: string;
}

// Function to initialize database with sample data
export async function initializeDatabase(universities: University[]) {
  try {
    // Check if universities table exists and has data
    const { count, error: countError } = await supabase
      .from('universities')
      .select('*', { count: 'exact', head: true });
    
    if (countError) {
      throw countError;
    }
    
    // If data already exists, don't re-insert
    if (count && count > 0) {
      console.log('Universities data already exists in the database');
      return { success: true };
    }
    
    // Insert universities data
    const { error } = await supabase
      .from('universities')
      .insert(universities);
    
    if (error) {
      throw error;
    }
    
    console.log('Universities data inserted successfully');
    return { success: true };
  } catch (error) {
    console.error('Error initializing database:', error);
    toast({
      title: "Database initialization failed",
      description: (error as any)?.message || "An unknown error occurred",
      variant: "destructive",
    });
    return { success: false, error };
  }
}

// Function to fetch all universities
export async function fetchUniversities() {
  try {
    const { data, error } = await supabase
      .from('universities')
      .select('*');
    
    if (error) {
      throw error;
    }
    
    return { success: true, data };
  } catch (error) {
    console.error('Error fetching universities:', error);
    return { success: false, error, data: [] };
  }
}

// Function to fetch a single university by ID
export async function fetchUniversityById(id: number) {
  try {
    const { data, error } = await supabase
      .from('universities')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) {
      throw error;
    }
    
    return { success: true, data };
  } catch (error) {
    console.error(`Error fetching university with ID ${id}:`, error);
    return { success: false, error, data: null };
  }
}

// Function to save student inquiry
export async function saveStudentInquiry(inquiry: any) {
  try {
    const { error } = await supabase
      .from('inquiries')
      .insert([inquiry]);
    
    if (error) {
      throw error;
    }
    
    return { success: true };
  } catch (error) {
    console.error('Error saving student inquiry:', error);
    return { success: false, error };
  }
}
