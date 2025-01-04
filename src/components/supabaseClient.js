import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tadcgmzjdxjzflrszhhi.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhZGNnbXpqZHhqemZscnN6aGhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU5NDI4OTUsImV4cCI6MjA1MTUxODg5NX0.UyJkUAUD9uI7XqOAQItpp8kf6M06FMgbZ7htAhooSPM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
