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

export const fetchRoomAmenities = async (id)=>{
const { data, error } = await supabase
  .from("room_type_amenities")
    .select(`
      room_amenities (
        id,
        name
      )
    `)
    .eq("room_type_id", id);
    return data
}


