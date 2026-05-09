import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import MainLayout from "./layouts/MainLayout/MainLayout.jsx";
import Booking from "./features/bookings/Booking.jsx";
import Home from "./pages/Home/Home.jsx";
import RoomDetails from "./features/rooms/RoomDetails/RoomDetails.jsx";
import BookingSuccess from "./pages/BookingSuccess/BookingSuccess.jsx"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="booking/:id/:checkIn/:checkOut" element={<Booking />} />
          <Route path="room-details/:id" element={<RoomDetails />} />
           <Route path="booking-success" element={<BookingSuccess />} />
        </Route>
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
