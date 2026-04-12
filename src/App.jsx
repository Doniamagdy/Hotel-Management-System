import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient.js";


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
      {guestName.map((guest) => (
        <p key={guest.id}>{guest.guest_full_name}</p>
      ))}
    </div>
  );
}

export default App;