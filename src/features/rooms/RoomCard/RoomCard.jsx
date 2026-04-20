import React from 'react'
import img from "../../../assets/room-twin-bed-2520x1400.jpg"

function RoomCard() {
  return (
   <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col md:flex-row">

      {/* Image Section */}
      <div className="md:w-1/3 w-full h-56 md:h-auto">
        <img
          src={img}
        //   alt={room.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col justify-between flex-1">

        {/* Title + Rating */}
        <div>
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-semibold text-gray-800">
              {/* {room.name} */} Single room
            </h2>

            <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-lg text-sm font-medium">
              {/* ⭐ {room.rating} */}
            </div>
          </div>

          <p className="text-gray-500 text-sm mt-2">
            {/* {room.description} */}Pretty room
          </p>
        </div>

        {/* Features */}
        <div className="flex gap-2 flex-wrap mt-3">
          {/* {room.features?.map((f, i) => (
            <span
              key={i}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
            >
              {f}
            </span>
          ))} */}  King bed , wifi 
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center mt-5">

          {/* Availability */}
          <div>
            {/* {room.isAvailable ? (
              <p className="text-green-600 font-medium text-sm">
                Available ✓
              </p>
            ) : (
              <p className="text-red-500 font-medium text-sm">
                Not Available ✕
              </p>
            )} */}

            <p className="text-gray-500 text-xs">
              {/* {room.location} */} Hurgahda
            </p>
          </div>

          {/* Price + Button */}
          <div className="text-right">
            <p className="text-lg font-bold text-gray-900">
              {/* ${room.price} */} 600$
              <span className="text-sm font-normal text-gray-500">
                /night
              </span>
            </p>

            <button
            //   disabled={!room.isAvailable}
            //   className={`mt-2 px-4 py-2 rounded-lg text-sm font-medium transition
            //     ${room.isAvailable
            //       ? "bg-blue-600 text-white hover:bg-blue-700"
            //       : "bg-gray-300 text-gray-500 cursor-not-allowed"
            //     }`}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default RoomCard
