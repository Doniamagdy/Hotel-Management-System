import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getRoomDetailsById,
  insertBookingDetails,
  allocateRoomForBooking,
} from "../services/booking.service";
import { insertGuest } from "../services/addGuest.service";
import { notify, calcDays } from "../utils/utils";

function useReservation() {
  const { id, checkIn, checkOut } = useParams();
  const navigate = useNavigate();

  //First Form
  const [guestInfo, setGuestInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    nationality: "",
    guestNationalId: "",
  });

  const [totalPrice, setTotalPrice] = useState(0);

  //Second Form
  const [bookedRoomInfo, setBookedRoomInfo] = useState({
    adultsCount: 0,
    childrenCount: 0,
  });

  const [roomDetails, setRoomDetails] = useState([]);

  const nightsCountInHotel = calcDays(checkOut, checkIn);

  useEffect(() => {
    async function getRoomDetails() {
      // handle errors
      try {
        // handle if there is no id found
        if (!id) {
          return;
        }

        const data = await getRoomDetailsById(id);

        // handle empty state
        if (data?.length > 0) {
          setRoomDetails(data);
        } else {
          notify("Room not found");
        }
      } catch (error) {
        console.log(error);
        notify("Can not get Room details at this moment. ");
      }
    }
    getRoomDetails();
  }, [id]);

  useEffect(() => {
    function calcPrice(nightCounts, roomPricePerNight) {
      if (!roomDetails?.[0]?.price_per_night || !nightsCountInHotel) return;

      const price = nightCounts * roomPricePerNight;
      setTotalPrice(price);
    }

    calcPrice(nightsCountInHotel, roomDetails[0]?.price_per_night);
  }, [nightsCountInHotel, roomDetails]);

  async function handleBookingSubmit() {
    try {
      const guestRes = await insertGuest({
        fullName: guestInfo.fullName,
        phone: guestInfo.phone,
        email: guestInfo.email,
        nationality: guestInfo.nationality,
        guestNationalId: guestInfo.guestNationalId,
      });

      const guestId = guestRes.id;

      const submissionResult = await insertBookingDetails({
        checkIn,
        checkOut,
        adultsCount: bookedRoomInfo.adultsCount,
        childrenCount: bookedRoomInfo.childrenCount,
        bookingGuestId: guestId,
        totalPrice,
      });

      if (guestId) {
          await allocateRoomForBooking(
            guestId,
            id,
            checkIn,
            checkOut,
          );
      
      }

      if (guestRes && submissionResult && bookedRoomInfo?.adultsCount > 0) {
        navigate("/booking-success");
      } else {
        notify("Booking data is missed");
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  return {
    id,
    checkIn,
    checkOut,
    roomDetails,
    nightsCountInHotel,

    totalPrice,

    guestInfo,
    setGuestInfo,
    bookedRoomInfo,
    setBookedRoomInfo,

    handleBookingSubmit,
  };
}

export default useReservation;

