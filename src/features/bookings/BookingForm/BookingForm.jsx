import React, { useState } from "react";

function BookingForm() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    date: "",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا هتنادي API
    console.log(form);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Book Now</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Guest Info */}
        <input
          type="text"
          name="full_name"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        {/* Booking Info */}
        <input
          type="date"
          name="date"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <textarea
          name="notes"
          placeholder="Notes"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button className="w-full bg-black text-white py-2 rounded">
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

export default BookingForm;