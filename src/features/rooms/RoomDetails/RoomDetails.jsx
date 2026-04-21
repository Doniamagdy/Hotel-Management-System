import { useParams } from "react-router-dom";
import img1 from "../../../assets/img1.avif";
import img2 from "../../../assets/img2.avif";
import img3 from "../../../assets/img3.avif";
import img4 from "../../../assets/img1.avif";
import { useEffect, useState } from "react";
import { fetchSingleRoom } from "../rooms.service";
function RoomDetails() {
  const { id } = useParams();
  console.log(id);
  
  const [roomDetails, setRoomDetails] = useState({});

  useEffect(() => {
    async function getRoomDetails() {
      const data = await fetchSingleRoom(id);
      console.log(data);
      setRoomDetails(data)
      
    }
    getRoomDetails()
  }, []);

console.log(roomDetails);


   const rooms = {
    
    rating: 4.8,
    reviews: 124,
    images: [img1,img2,img3,img4,img3],
    amenities: ["WiFi", "Pool", "Gym", "Spa", "Breakfast"],
    isAvailable: true,
  };

  return (
    <div className="px-6 md:px-12 py-10">
      {/* 🖼️ Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-10">
        <img
          src={rooms.images[0]}
          className="md:col-span-2 md:row-span-2 h-[420px] w-full object-cover rounded-xl"
        />

        {rooms.images.slice(1, 5).map((img, i) => (
          <div key={i} className="relative">
            <img
              src={img}
              className="h-[200px] w-full object-cover rounded-xl"
            />

        
            {i === 2 && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-xl text-white font-medium cursor-pointer">
                View all photos
              </div>
            )}
          </div>
        ))}
      </div>




      <div className="grid md:grid-cols-3 gap-10">
        {/* Left */}
        <div className="md:col-span-2 space-y-6">
          {/* Title */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{roomDetails.room_name}</h1>

            <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md">
                ⭐ {rooms.rating}
              </span>
              <span>({rooms.reviews} reviews)</span>
            </div>
          </div>

          {/* Highlights */}
          <div className="flex gap-3 flex-wrap">
            {rooms.amenities.map((item, index) => (
              <span
                key={index}
                className="bg-gray-100 px-3 py-1 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">{roomDetails.description}</p>

          {/* Extra Info */}
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <p>🛏️ </p>
            <p>👨‍👩‍👧 2 Adults, 1 Child</p>
            <p>📶 Free WiFi</p>
            <p>🌊 Sea View</p>
          </div>
        </div>

        {/* 💰 Booking Card */}
        <div className=" rounded-xl p-6 shadow-xl h-fit sticky top-24">
          <p className="text-2xl font-bold">
            ${roomDetails.price_per_night}
            <span className="text-sm text-gray-500"> / night</span>
          </p>

          <p
            className={`mt-2 text-sm font-medium ${
              rooms.isAvailable ? "text-green-600" : "text-red-500"
            }`}
          >
            {rooms.isAvailable ? "Available ✓" : "Not Available ✕"}
          </p>

          {/* Date Inputs */}
          <div className="mt-4 grid grid-cols-2 gap-2">
            <input type="date" className="border p-2 rounded-md" />
            <input type="date" className="border p-2 rounded-md" />
          </div>

          {/* Guests */}
          <div className="mt-3 grid grid-cols-2 gap-2">
            <select className="border p-2 rounded-md">
              <option>Adults</option>
              <option>1</option>
              <option>2</option>
            </select>

            <select className="border p-2 rounded-md">
              <option>Children</option>
              <option>0</option>
              <option>1</option>
            </select>
          </div>

          {/* CTA */}
          <button
            disabled={!rooms.isAvailable}
            className={`mt-5 w-full py-3 rounded-lg font-medium transition ${
              rooms.isAvailable
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500"
            }`}
          >
            Reserve Now
          </button>

          {/* small note */}
          <p className="text-xs text-gray-500 mt-3 text-center">
            You won’t be charged yet
          </p>
        </div>
      </div>

       
    </div>
  );
}

export default RoomDetails;
