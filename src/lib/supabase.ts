
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sitpqqfprhosjthhzaxf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpdHBxcWZwcmhvc2p0aGh6YXhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM2NzY2ODUsImV4cCI6MjA1OTI1MjY4NX0.fCrlItTgkWmpa7iSW857UGST-ixjKT5lR_tq5JGWCzw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
