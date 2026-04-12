import React from "react";
import Input from "../../components/Input/Input";

function AddGuest() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First Name */}
        <Input label="First Name" placeholder="Alex" />

        {/* Last Name */}
        <Input label="Last Name" placeholder="Smith" />
      </div>

      <div className="mt-4 space-y-4">
        <Input label="Email" placeholder="alex@email.com" />

        <Input label="Phone" placeholder="+20 1xxxxxxxxx" />

        <Input label="National ID" placeholder="ID Number" />
      </div>
    </div>
  );
}

export default AddGuest;
