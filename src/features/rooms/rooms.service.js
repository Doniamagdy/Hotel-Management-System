import { supabase } from "../../supabaseClient";

export const fetchRooms= async ()=>{

    const {data} = await supabase
  .from('rooms_types')
  .select()

 
  return data
}

