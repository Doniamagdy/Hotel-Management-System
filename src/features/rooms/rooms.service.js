import { supabase } from "../../supabaseClient";

export const fetchRooms= async ()=>{

    const {data} = await supabase
  .from('rooms_types')
  .select()

 
  return data
}

export const fetchSingleRoom= async (id)=>{

    const {data} = await supabase
  .from('rooms_types')
  .select("*")
    .eq("id", id)
    .single();
 
  return data
}
