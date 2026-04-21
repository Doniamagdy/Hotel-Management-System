import React from "react";
import img1 from "../../assets/img1.avif"

function RoomCardHomePage() {
 
  return (
   <div className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition w-92">

      {/* Image */}
      <div className="w-full h-64">
        <img
          src={img1}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Room Name */}
      <div className="flex items-center justify-center py-4">
        <h3 className="text-lg font-semibold text-gray-800 text-center">
       Deluxe Room
        </h3>
      </div>
      
    </div>
  );
}

export default RoomCardHomePage;
