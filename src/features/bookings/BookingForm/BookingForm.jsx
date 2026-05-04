import React, { useEffect, useState } from "react";
import {
  getRoomDetailsById,
  insertBookingDetails,
  calcDays,
} from "../booking.service";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { useParams } from "react-router-dom";

import { notify } from "../../../utils/utils";

function BookingForm() {
  const { id, checkIn, checkOut } = useParams();

  const [adultsCount, setAdultsCount] = useState(0);

  const [childrenCount, setChildrenCount] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  const [roomDetails, setRoomDetails] = useState([]);

  const [idOfGuest , setIdOfGuest] = useState(null)

  const nightsCountInHotel = calcDays(checkOut, checkIn);

  const guestId = sessionStorage.getItem("guestIdUsedInBooking");


  useEffect(() => {
    async function getRoomDetails() {
      const data = await getRoomDetailsById(id);
      setRoomDetails(data);
    }
    getRoomDetails();
  }, []);

  useEffect(() => {
    function calcPrice(nightCounts, roomPricePerNight) {
      if (!roomDetails?.[0]?.price_per_night || !nightsCountInHotel) return;

      const price = nightCounts * roomPricePerNight;
      setTotalPrice(price);
    }

    calcPrice(nightsCountInHotel, roomDetails[0]?.price_per_night);
  }, [nightsCountInHotel, roomDetails]);

  async function handleBookingSubmit() {
    const submissionResult = await insertBookingDetails({
      checkIn,
      checkOut,
      adultsCount,
      childrenCount,
      bookingGuestId: guestId,
      totalPrice,
    });

    if (submissionResult && adultsCount > 0) {
      notify("Booking details submitted successfully!");
    } else {
      notify("Error");
    }
  }


 



  return (
    <div className="w-3xl mx-auto p-6 bg-white rounded-2xl shadow">
      <h2 className="text-3xl font-semibold text-center">Book Your Stay</h2>

      {/* Room Details */}
      <div className="flex justify-between  text-3xl text-red-500 my-4">
        <h3>{roomDetails[0]?.room_name}</h3>
        <h3>{roomDetails[0]?.price_per_night}$</h3>
      </div>

      {/* Check-in */}
      <div className="flex flex-col gap-1 my-2">
        <label className="text-sm font-medium">
          Check-in
          <Input readOnly defaultValue={checkIn} />
        </label>
      </div>

      {/* Check-out */}
      <div className="flex flex-col gap-1 my-4">
        <label className="text-sm font-medium">
          Check-out
          <Input readOnly defaultValue={checkOut} />
        </label>
      </div>

      {/* Adults */}
      <div className="grid grid-cols-2 gap-1 my-1">
        <label className="text-sm font-medium">
          Adults count
          <div className="flex items-center gap-3">
            <Button
              onClick={() => {
                adultsCount <= 0
                  ? notify("Minimum is one adult")
                  : setAdultsCount(adultsCount - 1);
              }}
            >
              -
            </Button>

            <span className="text-base font-semibold pt-4">{adultsCount}</span>

            <Button
              onClick={() => {
                adultsCount >= roomDetails[0].adults_capacity
                  ? notify(
                      "This room capacity is not accepting more then this number of adults",
                      "error",
                    )
                  : setAdultsCount(adultsCount + 1);
              }}
            >
              +
            </Button>
          </div>
        </label>

        <label className="text-sm font-medium my-1">
          Children count
          <div className="flex items-center gap-3">
            <Button
              onClick={() => {
                childrenCount < 1
                  ? notify("Minimum is 0", "error")
                  : setChildrenCount(childrenCount - 1);
              }}
            >
              -
            </Button>
            <span className="text-base font-semibold pt-4">
              {childrenCount}
            </span>
            <Button
              onClick={() => {
                childrenCount >= roomDetails[0].children_capacity
                  ? notify(
                      "The type of rooms not accepting more than this of children",
                      "error",
                    )
                  : setChildrenCount(childrenCount + 1);
              }}
            >
              +
            </Button>
          </div>
        </label>
      </div>

      {/* Total Price */}
      <div className="mt-2 p-3 bg-gray-50 rounded-lg flex justify-between text-base">
        <span>Total price of {nightsCountInHotel} nights.</span>
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
