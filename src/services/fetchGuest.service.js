import { supabase } from "../supabaseClient";

 export async function getGuestName() {
    const { data, error } = await supabase.from("guests").select();
  
    if(error){throw new Error(error.message)}
    return data
  }

