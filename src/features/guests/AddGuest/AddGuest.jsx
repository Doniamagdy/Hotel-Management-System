import React, { useState } from "react";

import { insertGuest } from "./addGuest.service.js";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";


function AddGuest() {
  const handleSubmit = async () => {
    insertGuest({
      fullName,
      email,
      phone,
      nationality,
      nationalID,
    });
  };

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nationality, setNationality] = useState("");
  const [nationalID, setNationalID] = useState("");

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First Name */}
        <Input
          label="FullName"
          placeholder="Alex"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        {/* Last Name */}
        {/* <Input label="Last Name" placeholder="Smith" /> */}
      </div>

      <div className="mt-4 space-y-4">
        <Input
          label="Email"
          placeholder="alex@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          label="Phone"
          placeholder="+20 1xxxxxxxxx"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <Input
          label="Country"
          placeholder="Country"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
        />

        <Input
          label="National ID"
          placeholder="ID Number"
          value={nationalID}
          onChange={(e) => setNationalID(e.target.value)}
        />
      </div>

      <Button
        onClick={handleSubmit}
      >
        Send
      </Button>
    </div>
  );
}

export default AddGuest;
