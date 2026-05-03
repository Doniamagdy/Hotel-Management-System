import React from 'react'
import BookingForm from '../BookingForm/BookingForm'
import AddGuest from '../../guests/AddGuest/AddGuest'
function Booking() {
  return (
    <div className='flex justify-between'>
    <BookingForm/>
    <AddGuest />
    </div>
  )
}

export default Booking
