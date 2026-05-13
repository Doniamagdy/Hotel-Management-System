import { supabase } from "../supabaseClient";

export const successfulMessage = async (bookingId) => {

    const { data, error } = await supabase
      .from("booking_rooms")
      .select(
        "booking_id , room_id , bookings(check_in_date, check_out_date, adults_count, children_count) , rooms(room_number) ",
      )
      .eq("booking_id", bookingId);

// errors that comes from supbase for developers
    if (error) {
      throw new Error(error.message)
    }

    return data;
};
