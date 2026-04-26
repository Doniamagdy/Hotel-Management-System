import { supabase } from "../supabaseClient";

export async function getBookedRooms(checkInDay, checkOutDay) {
  const { data } = await supabase
    .from("bookings")
    .select("id, check_in_date, check_out_date");

  const BookedRooms = data.filter(
    (bookedRoom) =>
      new Date(bookedRoom.check_in_date) < new Date(checkOutDay) &&
      new Date(bookedRoom.check_out_date) > new Date(checkInDay),
  );
  return BookedRooms;
}

export const getAllRooms = async () => {
  const { data } = await supabase.from("rooms").select();
  return data;
};
