import { supabase } from "../../../supabaseClient";

export const insertGuest = async ({
  fullName,
  phone,
  email,
  nationality,
  guest_national_id,
}) => {
  const {data, error } = await supabase
    .from("guests")
    .insert({
      guest_full_name:fullName,
      guest_phone_number:phone,
      guest_email:email,
      guest_nationality:nationality,
      guest_national_id,
    }).select().single()

    console.log(data);
    
    const guestID =  data.id
    console.log(guestID);
    const guestIdUsedInBooking = localStorage.setItem('guestIdUsedInBooking' , guestID)
    
    return data 
};



