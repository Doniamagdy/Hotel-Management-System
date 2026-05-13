import { supabase } from "../supabaseClient";

export const fetchRooms = async () => {
  const { data , error} = await supabase.from("rooms_types").select();

  if(error){ throw new Error(error.message)}
  return data;
};

export const fetchSingleRoom = async (id) => {
  const { data , error } = await supabase
    .from("rooms_types")
    .select("*")
    .eq("id", id)
    .single();

    if(error){ throw new Error(error.message)}


  return data;
};
 

export const fetchRoomAmenities = async (id) => {
  const { data, error } = await supabase
    .from("room_type_amenities")
    .select(
      ` room_amenities (
        id,
        name
      )
    `,
    )
    .eq("room_type_id", id);

      if(error){ throw new Error(error.message)}

  return data;
};
