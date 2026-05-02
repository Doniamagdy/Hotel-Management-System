  import { supabase } from "../../supabaseClient";

 export async function getGuestName() {
    const { data, error } = await supabase.from("guests").select();
    console.log(data);
    return data
  }

