import {supabase} from "../../supabaseClient";
export  async function insertBookingDetails({
  roomType,
  adultsCount,
  childrenCount,
  checkIn,
  checkOut,
}) {
  const { data, error } = await supabase
    .from("booking")
    .insert({
      check_in_date: checkIn,
      check_out_date: checkOut,
      adults_count: adultsCount,
      children_count: childrenCount,
    }).select()

    return data
}
