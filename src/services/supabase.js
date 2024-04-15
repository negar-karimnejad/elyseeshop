import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://wpwlozghutonzvwletzf.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indwd2xvemdodXRvbnp2d2xldHpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3ODUwMzAsImV4cCI6MjAyNzM2MTAzMH0.GTjq8ksdwhdZcZCyXxg6EGwOz4-sUMH73o3hcyA87xA';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
