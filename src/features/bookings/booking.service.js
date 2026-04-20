import { supabase } from "../../supabaseClient";
export async function insertBookingDetails({
  roomType,
  adultsCount,
  childrenCount,
  checkIn,
  checkOut,
  bookingGuestId,
}) {
  const { data, error } = await supabase
    .from("bookings")
    .insert({
      check_in_date: checkIn,
      check_out_date: checkOut,
      adults_count: adultsCount,
      children_count: childrenCount,
      booking_guest_id: bookingGuestId,
    })
    .select();

  return data;
}
