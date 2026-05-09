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
const navigate = useNavigate()

  //First Form
  const [guestInfo, setGuestInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    nationality: "",
    nationalID: "",
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
    
    const guestRes = await insertGuest({
      fullName: guestInfo.fullName,
      phone: guestInfo.phone,
      email: guestInfo.email,
      nationality: guestInfo.nationality,
      nationalID: guestInfo.nationalID ,
    });

    
    const guestId = guestRes.id;
    console.log(guestId);
  
    const submissionResult = await insertBookingDetails({
      checkIn,
      checkOut,
      adultsCount: bookedRoomInfo.adultsCount,
      childrenCount : bookedRoomInfo.childrenCount,
      bookingGuestId: guestId,
      totalPrice,
    });

    if (submissionResult && bookedRoomInfo.adultsCount > 0) {
      navigate("/booking-success");
    } else {
      notify("Error");
    }

    if (guestId) {
      async function relationBetweenTables() {
        const data = await allocateRoomForBooking(guestId,id);
        console.log(data);
      }
      relationBetweenTables();
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
