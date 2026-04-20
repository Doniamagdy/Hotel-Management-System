import AddGuest from "./features/guests/AddGuest/AddGuest.jsx";
import "./App.css";
import Navbar from "./layouts/Navbar/Navbar.jsx";
import FetchGuest from "./features/guests/FetchGuest/FetchGuest.jsx";
import { Route, Routes } from "react-router-dom";
import BookingForm from "./features/bookings/BookingForm/BookingForm.jsx";
import RoomCard from "./features/rooms/RoomCard/RoomCard.jsx";
function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="add-guest" element={<AddGuest />} />
        <Route path="fetch-guest" element={<FetchGuest />} />
        <Route path="booking-form" element={<BookingForm />} />
      </Routes>

      <RoomCard />
    </div>
  );
}

export default App;
