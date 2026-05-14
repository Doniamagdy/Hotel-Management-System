import React, { useEffect, useState } from "react";

import { fetchRooms } from "../../../services/rooms.service";
import { Link } from "react-router-dom";


function RoomCardHomePage() {
  const [hotelRooms, setHotelRooms] = useState([]);

  useEffect(() => {
    async function loadRooms() {
      const data = await fetchRooms();
      setHotelRooms(data);
    }
    loadRooms();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {hotelRooms?.map((room) => (
        <Link to={`/room-details/${room.id}`} key={room.id} className="w-full rounded-md shadow-md overflow-hidden hover:shadow-lg transition">
          {/* Image */}
          <div className="w-full h-64">
            <img src={room.image_url} alt={room.room_name} className="w-full h-full object-cover" />
          </div>

          {/* Room Name */}
          <div className="flex items-center justify-center py-4">
            <h3 className="text-lg font-semibold text-gray-800 text-center">
              {room.room_name}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default RoomCardHomePage;
