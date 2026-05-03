import React, { useEffect, useState } from "react";
import {
  getRoomNameAndPriceById,
  insertBookingDetails,
  calcDays
} from "../booking.service";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { useParams } from "react-router-dom";

import {notify} from '../../../utils/utils';




function BookingForm() {
  const { id } = useParams();

  const [checkIn, setCheckIn] = useState(0);

  const [checkOut, setCheckOut] = useState(0);

  const [adultsCount, setAdultsCount] = useState(0);

  const [childrenCount, setChildrenCount] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  const [roomDetails, setRoomDetails] = useState([]);

  const guestId = localStorage.getItem("guestIdUsedInBooking");

  
  const nightsCountInHotel = calcDays(checkOut, checkIn);

  useEffect(() => {
    async function getRoomNameAndPrice() {
      const data = await getRoomNameAndPriceById(id);
      setRoomDetails(data);
    }
    getRoomNameAndPrice();
  }, []);

  useEffect(() => {
    function calcPrice(nightCounts, roomPricePerNight) {
        if (!roomDetails || !roomDetails[0]?.price_per_night || !nightsCountInHotel) return;

      const price = nightCounts* roomPricePerNight;
      console.log(price);
      
      // nan gaya mn hena
      setTotalPrice(price);
    }

    calcPrice(nightsCountInHotel, roomDetails[0]?.price_per_night );
  }, [nightsCountInHotel, roomDetails]);

  async function handleBookingSubmit() {
  const subimssionResult = await insertBookingDetails({
      checkIn,
      checkOut,
      adultsCount,
      childrenCount,
      bookingGuestId: guestId,
      totalPrice
    });

    if(subimssionResult){
    notify("Submitted ", "success")

    }else{
          notify("Not Submitted ", "error")

    }

  }

  

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow">
      <h2 className="text-3xl font-semibold text-center">Book Your Stay</h2>

      {/* Room Details */}
      <div className="grid grid-cols-2  text-3xl text-blue-500">
        <h3>{roomDetails[0]?.room_name}</h3>
        <h3>{roomDetails[0]?.price_per_night}$</h3>
      </div>

      {/* Check-in */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">
          Check-in
          <Input
            onChange={(e) => {
              setCheckIn(e.target.value);
            }}
            type="date"
          />
        </label>
      </div>

      {/* Check-out */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">
          Check-out
          <Input
            onChange={(e) => {
              setCheckOut(e.target.value);
            }}
            type="date"
          />
        </label>
      </div>

      {/* Adults */}
      <div className="grid grid-cols-2 gap-1">
        <label className="text-sm font-medium">
          Adults
          <div className="flex items-center gap-3">
            <Button onClick={() => setAdultsCount(adultsCount - 1)}> -</Button>
            <span className="text-base font-semibold pt-4">{adultsCount}</span>
            <Button onClick={() => setAdultsCount(adultsCount + 1)}> + </Button>
          </div>
        </label>

        <label className="text-sm font-medium">
          Children
          <div className="flex items-center gap-3">
            <Button onClick={() => setChildrenCount(childrenCount - 1)}>
              {" "}
              -{" "}
            </Button>
            <span className="text-base font-semibold pt-4">
              {childrenCount}
            </span>
            <Button onClick={() => setChildrenCount(childrenCount + 1)}>
              {" "}
              +{" "}
            </Button>
          </div>
        </label>
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
        className="mt-3 py-3 rounded-lg bg-black text-white text-base font-medium hover:bg-gray-800 transition"
      >
        Book Now
      </Button>
    </div>
  );
}

export default BookingForm;
