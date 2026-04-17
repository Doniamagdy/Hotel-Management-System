import React, { useState } from "react";

function BookingForm() {
 
  
  

  return (
  <div className="max-w-sm mx-auto mt-12 p-6 border border-gray-200 rounded-xl bg-white shadow-sm flex flex-col gap-4">

      <h2 className="text-xl font-semibold text-center">
        Book Your Stay
      </h2>

      {/* Room Selection */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Select Room</label>
        <select className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black">
          <option>Deluxe Room - $100/night</option>
          <option>Standard Room - $70/night</option>
          <option>Suite - $150/night</option>
        </select>
      </div>

      {/* Check-in */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Check-in</label>
        <input
          type="date"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* Check-out */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Check-out</label>
        <input
          type="date"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* Adults */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Adults</label>
        <div className="flex items-center gap-3">
          <button className="w-9 h-9 border border-gray-300 rounded-md bg-gray-100">
            -
          </button>
          <span className="text-base font-semibold">1</span>
          <button className="w-9 h-9 border border-gray-300 rounded-md bg-gray-100">
            +
          </button>
        </div>
      </div>

       {/* Children */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Children</label>
        <div className="flex items-center gap-3">
          <button className="w-9 h-9 border border-gray-300 rounded-md bg-gray-100">
            -
          </button>
          <span className="text-base font-semibold">1</span>
          <button className="w-9 h-9 border border-gray-300 rounded-md bg-gray-100">
            +
          </button>
        </div>
      </div>

      {/* Total Price */}
      <div className="mt-2 p-3 bg-gray-50 rounded-lg flex justify-between text-base">
        <span>Total Price</span>
        <span className="font-semibold">$0</span>
      </div>

      {/* Button */}
      <button className="mt-3 py-3 rounded-lg bg-black text-white text-base font-medium hover:bg-gray-800 transition">
        Book Now
      </button>

    </div>
  );
}

export default BookingForm;