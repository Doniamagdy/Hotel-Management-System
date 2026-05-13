import React, { useEffect, useState } from "react";
import { successfulMessage } from "../../services/bookingMsg.service.js";
import { notify } from "../../utils/utils.js";
function BookingSuccess() {

  const bookingId = sessionStorage.getItem("bookingID");
  const [confirmationBookedDetails, setConfirmationBookedDetails] = useState();


  useEffect(() => {
    const message = async () => {

      try {
        const data = await successfulMessage(bookingId);

        if(data?.length){
        setConfirmationBookedDetails(data[0]);

        }
      } catch (error) {
        console.log(error.message);
        
        notify("Unable to load booking details");
      }
    };
    message();
  }, [bookingId]);


  return (
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 border">
      {/* Icon + Title */}
      <div className="text-center">
        <div className="text-5xl mb-3">🎉</div>
        <h1 className="text-2xl font-bold text-gray-800">Booking Confirmed</h1>
        <p className="text-gray-500 mt-2">
          Your reservation has been successfully created
        </p>
      </div>

      {/* Divider */}
      <div className="my-6 border-t"></div>

      {/* Booking Info */}
      <div className="space-y-4 text-gray-700">
        <div className="flex justify-between">
          <span className="font-medium">Booking ID</span>
          <span className="text-gray-900">
            {confirmationBookedDetails?.booking_id}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium">Status</span>
          <span className="text-green-600 font-semibold">Confirmed</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium">Payment</span>
          <span>Completed</span>
        </div>
      </div>

      {/* Room Preview Card */}
      <div className="mt-6 bg-gray-50 rounded-xl p-4 border">
        <h4>Room No:{confirmationBookedDetails?.rooms?.room_number}</h4>
        <div className="mt-2 text-sm text-gray-600 space-y-1">
          <p>Check-in: {confirmationBookedDetails?.bookings?.check_in_date}</p>
          <p>
            Check-out: {confirmationBookedDetails?.bookings?.check_out_date}
          </p>
          <p>
            Guests: {confirmationBookedDetails?.bookings?.adults_count} adult
          </p>
          <p>
            Guests: {confirmationBookedDetails?.bookings?.children_count} child
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-3">
        <button className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
          View Booking
        </button>

        <button className="flex-1 border py-3 rounded-lg hover:bg-gray-100 transition">
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default BookingSuccess;
