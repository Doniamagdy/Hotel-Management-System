import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient.js";
import AddGuest from "./features/guests/AddGuest/AddGuest.jsx";
import "./App.css";
import Navbar from "./layouts/Navbar/Navbar.jsx";
import Footer from "./layouts/Footer/Footer.jsx";

function App() {
  const [guestName, setIGuestName] = useState([]);

  // console.log(supabase.supabaseUrl);

  useEffect(() => {
    getGuestName();
  }, []);

  async function getGuestName() {
    const { data, error } = await supabase.from("guests").select();
    console.log(data);

    setIGuestName(data);
  }

  return (
    <div>
    <Navbar/>
      {guestName.map((guest) => (
        <p key={guest.id}>{guest.guest_full_name}</p>
      ))}

      <AddGuest />

      <Footer/>
    </div>
  );
}

export default App;
