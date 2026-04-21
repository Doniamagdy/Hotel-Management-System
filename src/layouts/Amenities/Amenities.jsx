import React from "react";
import {
  FaWifi,
  FaSwimmingPool,
  FaDumbbell,
  FaSpa,
  FaUtensils,
  FaParking,
} from "react-icons/fa";

const amenitiesData = [
  { id: 1, icon: FaWifi, label: "Free WiFi" },
  { id: 2, icon: FaSwimmingPool, label: "Pool" },
  { id: 3, icon: FaDumbbell, label: "Gym" },
  { id: 4, icon: FaSpa, label: "Spa" },
  { id: 5, icon: FaUtensils, label: "Restaurant" },
  { id: 6, icon: FaParking, label: "Free Parking" },
];

function Amenities() {
  return (
    <div className="w-full py-8 flex justify-center items-center gap-8 flex-wrap shadow-md">
      {amenitiesData.map((item) => (
        <div key={item.id} className="relative group cursor-pointer">
          <item.icon className="text-2xl text-gray-700 group-hover:text-blue-600 transition" />

          <span
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 
                           bg-black text-white text-xs px-2 py-1 rounded 
                           opacity-0 group-hover:opacity-100 transition whitespace-nowrap"
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Amenities;
