import { supabase } from "../../supabaseClient";

export const fetchRooms= async ()=>{

    const {data} = await supabase
  .from('rooms')
  .select()

  
  const roomType = data?.map((roomType)=> roomType.room_name)
 
  return roomType
}

