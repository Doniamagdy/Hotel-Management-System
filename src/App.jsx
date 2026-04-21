import "./App.css";
import { Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout/MainLayout.jsx";

import AddGuest from "./features/guests/AddGuest/AddGuest.jsx";
import FetchGuest from "./features/guests/FetchGuest/FetchGuest.jsx";

import BookingForm from "./features/bookings/BookingForm/BookingForm.jsx";

import Home from "./pages/Home/Home.jsx";
import RoomDetails from "./features/rooms/RoomDetails/RoomDetails.jsx";



function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} >

      <Route index  element={<Home />}/>
      <Route path="add-guest" element={<AddGuest />} />
      <Route path="fetch-guest" element={<FetchGuest />} />
      <Route path="booking-form" element={<BookingForm />} />
       <Route path="room-details/:id" element={<RoomDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
