import React from 'react'
import BookingForm from '../BookingForm/BookingForm'
import AddGuest from '../../guests/AddGuest/AddGuest'
function Booking() {
  return (
    <div className='flex justify-between'>
      <AddGuest />

    <BookingForm/>
    </div>
  )
}

export default Booking
