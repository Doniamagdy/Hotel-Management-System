import React, { useEffect, useState } from "react";
import { insertBookingDetails } from "../booking.service";
import { fetchRooms } from "../../rooms/rooms.service";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button"

function calcDays(checkout, checkin) {
  const reservationEndDay = Number(new Date(checkout));
  const reservationStartDay = Number(new Date(checkin));

  const accommodationDays =
    (reservationEndDay - reservationStartDay) / (1000 * 60 * 60 * 24);

  const daysInHotel = Math.ceil(accommodationDays);
  return daysInHotel;
}

function BookingForm() {
  const [checkIn, setCheckIn] = useState("");

  const [checkOut, setCheckOut] = useState("");

  const [adultsCount, setAdultsCount] = useState(0);

  const [childrenCount, setChildrenCount] = useState(0);

  const [rooms, setRooms] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  const guestId = localStorage.getItem("guestIdUsedInBooking");

  const nightsCountInHotel = calcDays(checkOut, checkIn);


  useEffect(() => {
    async function fetchRoomTypes() {
      const rooms = await fetchRooms();
      setRooms(rooms);
    }
    fetchRoomTypes();
  }, []);

   useEffect(() => {
    function calcPrice(nightCounts, roomPricePerNight) {
      const price = nightCounts * roomPricePerNight;
      setTotalPrice(price);
    }

    calcPrice(nightsCountInHotel, 10);
  }, [nightsCountInHotel]);


  function handleBookingSubmit() {
    insertBookingDetails({
      checkIn,
      checkOut,
      adultsCount,
      childrenCount,
      bookingGuestId: guestId,
    });
  }


  return (
    <div className="max-w-sm mx-auto mt-12 p-6 border border-gray-200 rounded-xl bg-white shadow-sm flex flex-col gap-4">

      <h2 className="text-xl font-semibold text-center">Book Your Stay</h2>

      {/* Room Selection */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Select Room</label>
        <select className="w-full px-2 py-3 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200">
          {rooms?.map((room, index) => (
            <option key={index}>{room.room_name}  {room.price_per_night}$</option>
          ))}
        </select>
      </div>

      {/* Check-in */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Check-in</label>
        <Input onChange={(e) => {setCheckIn(e.target.value);}} type="date" />
      </div>

      {/* Check-out */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Check-out</label>
        <Input
          onChange={(e) => {
            setCheckOut(e.target.value);
          }}
          type="date"
        />
      </div>

      {/* Adults */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Adults</label>
        <div className="flex items-center gap-3">
          <Button onClick={() => setAdultsCount(adultsCount - 1)}> -</Button>
          <span className="text-base font-semibold pt-4">{adultsCount}</span>
          <Button onClick={() => setAdultsCount(adultsCount + 1)}> + </Button>
        </div>
      </div>

      {/* Children */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Children</label>
        <div className="flex items-center gap-3">
          <Button onClick={() => setChildrenCount(childrenCount - 1)}> - </Button>
          <span className="text-base font-semibold pt-4">{childrenCount}</span>
          <Button onClick={() => setChildrenCount(childrenCount + 1)}> + </Button>
        </div>
      </div>

      {/* Total Price */}
      <div className="mt-2 p-3 bg-gray-50 rounded-lg flex justify-between text-base">
        <span>Total Price</span>
        <span className="font-semibold">{totalPrice}$</span>
      </div>

      {/* Button */}
       <Button
        type="submit"
        onClick={handleBookingSubmit}
        className="mt-3 py-3 rounded-lg bg-black text-white text-base font-medium hover:bg-gray-800 transition">
        Book Now
      </Button>

    </div>
  );
}

export default BookingForm;
