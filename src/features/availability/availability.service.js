import { supabase } from "../../supabaseClient";

export const checkRoomAvailability = async (checkInDay, checkOutDay , typeId) => {

  //1-
  const { data: allRooms } = await supabase.from("rooms").select("*")
 
//2-
  const { data: bookedRooms } = await supabase
    .from("bookings")
    .select("id, check_in_date, check_out_date , booking_rooms(room_id , rooms(room_number))")
    .lt("check_in_date", checkOutDay )
    .gt("check_out_date" , checkInDay)



  const booked_Room_id = bookedRooms.flatMap((booking) =>
  booking.booking_rooms.map((r) => r.room_id))
  
  console.log(booked_Room_id);

  const availableRooms = allRooms.filter(
  (room) => !booked_Room_id.includes(room.id) && room.room_type_id === Number(typeId)
);

// const x= availableRooms? console.log("room is available"): console.log("room is not  available")
return availableRooms
  

}



