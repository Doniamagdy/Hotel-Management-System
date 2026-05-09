import { toast } from 'react-toastify';

export  const notify = (message) => toast(message);


 export function calcDays(checkout, checkin) {

    if (!checkout || !checkin) return 0;

    const reservationEndDay = new Date(checkout);
    const reservationStartDay = new Date(checkin);

    const accommodationDays =( reservationEndDay - reservationStartDay ) / (1000 * 60 * 60 * 24);
    const daysInHotel = Math.ceil(accommodationDays)    

    return daysInHotel;

  }
