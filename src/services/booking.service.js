import { supabase } from "../supabaseClient";
import { checkRoomAvailability } from "./availability.service";

export const insertBookingDetails = async ({
  roomType,
  adultsCount,
  childrenCount,
  checkIn,
  checkOut,
  bookingGuestId,
  totalPrice,
}) => {
  const { data, error } = await supabase
    .from("bookings")
    .insert({
      check_in_date: checkIn,
      check_out_date: checkOut,
      adults_count: adultsCount,
      children_count: childrenCount,
      booking_guest_id: bookingGuestId,
      total_price: totalPrice,
    })
    .select();
  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const allocateRoomForBooking = async (
  guestId,
  typeId,
  checkIn,
  checkOut,
) => {
  //1
  const { data: tableOne, error: tableOneError } = await supabase
    .from("bookings")
    .select("id")
    .eq("booking_guest_id", guestId)
    .single();

  const bookingId = sessionStorage.setItem("bookingID", tableOne.id);
  if (tableOneError) {
    throw new Error(tableOneError.message);
  }

  // 2
  const availableRooms = await checkRoomAvailability(checkIn, checkOut, typeId);

  const firstEmptyRoomID = availableRooms[0].id;

  //3
  const { data: tableTwo, error: tableTwoError } = await supabase
    .from("booking_rooms")
    .insert({ booking_id: tableOne.id, room_id: firstEmptyRoomID })
    .select();

  if (tableTwoError) {
    throw new Error(tableTwoError.message);
  }

  return { tableTwo, bookingId };
};

export const getRoomDetailsById = async (id) => {
  const { data, error } = await supabase
    .from("rooms_types")
    .select("room_name, price_per_night,adults_capacity,children_capacity")
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
  return data;
};
