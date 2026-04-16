import AddGuest from "./features/guests/AddGuest/AddGuest.jsx";
import "./App.css";
import Navbar from "./layouts/Navbar/Navbar.jsx";
import Footer from "./layouts/Footer/Footer.jsx";
import FetchGuest from "./features/guests/FetchGuest/FetchGuest.jsx";
import { Route ,Routes } from "react-router-dom";
import BookingForm from "./features/bookings/BookingForm/BookingForm.jsx";

function App() {






  return (
    <div>
      <Navbar />

 <Routes>
      <Route path="add-guest" element={<AddGuest/>} />
        <Route path="fetch-guest" element={<FetchGuest />} />
    </Routes>
     

     <BookingForm/>



    </div>
  );
}

export default App;
