import { supabase } from "../supabaseClient";

export const insertGuest = async ({
  fullName,
  phone,
  email,
  nationality,
  guestNationalId,
}) => {

  const { data , error } = await supabase
    .from("guests")
    .insert({
      guest_full_name: fullName,
      guest_phone_number: phone,
      guest_email: email,
      guest_nationality: nationality,
      guest_national_id:guestNationalId,
    })
    .select()
    .single();


  const guestID = data.id;

  if(error){
    throw new Error(error.message)
  }

  return data ;
};
