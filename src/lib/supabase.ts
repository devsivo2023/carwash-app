import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bkochurwirylysikalat.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJrb2NodXJ3aXJ5bHlzaWthbGF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1NzU5MjEsImV4cCI6MjA1MTE1MTkyMX0.4aR5csAA39lRX05A2ikXQiFDEgmgl_bYwqKBGDteu3A";

export const supabase = createClient(supabaseUrl, supabaseKey);
