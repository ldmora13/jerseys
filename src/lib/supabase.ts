import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qlwlnzgvvjdkdudxmgtw.supabase.co'; // Reemplaza con tu URL de Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsd2xuemd2dmpka2R1ZHhtZ3R3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxODY0NDgsImV4cCI6MjA1ODc2MjQ0OH0.RT8ZJ6GawRWL_8iPKLpnebnr-FytHD9SOSjJ74zIo2U'; // Reemplaza con tu clave pública de Supabase

export const supabase = createClient(supabaseUrl, supabaseKey);