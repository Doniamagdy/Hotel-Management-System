import { supabase } from "../../supabaseClient";
export async function insertBookingDetails({
  roomType,
  adultsCount,
  childrenCount,
  checkIn,
  checkOut,
  bookingGuestId,
  totalPrice
}) {
  const { data, error } = await supabase
    .from("bookings")
    .insert({
      check_in_date: checkIn,
      check_out_date: checkOut,
      adults_count: adultsCount,
      children_count: childrenCount,
      booking_guest_id: bookingGuestId,
      total_price:totalPrice
    })
    .select();

  return data;
}

export const getRoomDetailsById= async(id)=>{
const {data} = await supabase .from("rooms_types").select("room_name, price_per_night,adults_capacity,children_capacity").eq("id",id)
return data
}


 export function calcDays(checkout, checkin) {

    if (!checkout || !checkin) return 0;

    const reservationEndDay = new Date(checkout);
    const reservationStartDay = new Date(checkin);

    const accommodationDays =( reservationEndDay - reservationStartDay ) / (1000 * 60 * 60 * 24);
    const daysInHotel = Math.ceil(accommodationDays)    

    return daysInHotel;

  }