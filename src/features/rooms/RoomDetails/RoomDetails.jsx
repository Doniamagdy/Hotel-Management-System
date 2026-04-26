import { useParams } from "react-router-dom";
import img1 from "../../../assets/img1.avif";
import img2 from "../../../assets/img2.avif";
import img3 from "../../../assets/img3.avif";
import img4 from "../../../assets/img1.avif";
import { useEffect, useState } from "react";
import { fetchSingleRoom, fetchRoomAmenities } from "../rooms.service";
import { getAllRooms, getBookedRooms } from "../../availability.service";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";

function RoomDetails() {
  const { id } = useParams();
  //   console.log(id);

  const [roomDetails, setRoomDetails] = useState({});
  const [roomAmenities, setRoomAmenities] = useState([]);

  useEffect(() => {
    async function getRoomDetails() {
      const data = await fetchSingleRoom(id);
      //   console.log(data);
      setRoomDetails(data);
    }

    async function getRoomAmenities() {
      const data = await fetchRoomAmenities(id);
      //   console.log(data);
      setRoomAmenities(data);
    }

    // async function checkDate(){
    //     const data = await checkRoomAvailability()
    //     console.log(data);
    // }

    async function getRooms() {
      const data = await getAllRooms();
      // console.log(data);
    }

    async function getBookings() {
      const data = await getBookedRooms("2026-04-29", "2026-05-09");
      console.log(data);
    }

    getRoomDetails();
    getRoomAmenities();
    // checkDate()
    getRooms();
    getBookings();
  }, []);

  //   console.log(roomDetails);

  const rooms = {
    images: [img1, img2, img3, img4, img3],
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
            <h1 className="text-3xl font-bold text-gray-800">
              {roomDetails.room_name}
            </h1>
          </div>

          {/* Highlights */}
          <div className="flex gap-3 flex-wrap">
            {roomAmenities.map((item) => (
              <span
                key={item.id}
                className="bg-gray-100 px-3 py-1 rounded-full text-sm"
              >
                {item.room_amenities.name}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            {roomDetails.description}
          </p>

          {/* Extra Info */}
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <p> {roomDetails.adults_capacity} adult</p>
            <p> {roomDetails.children_capacity} child</p>
            <p> {roomDetails.size} </p>
            <p> {roomDetails.view} </p>
          </div>
        </div>

        {/* 💰 Booking Card */}
        <div className=" rounded-xl p-6 shadow-xl h-fit sticky top-24">
          <p className="text-2xl font-bold">
            ${roomDetails.price_per_night}
            <span className="text-sm text-gray-500"> / night</span>
          </p>

          {/* <p
            className={`mt-2 text-sm font-medium ${
              rooms.isAvailable ? "text-green-600" : "text-red-500"
            }`}
          >
            {rooms.isAvailable ? "Available ✓" : "Not Available ✕"}
          </p> */}

          {/* Date Inputs */}
          <div className="mt-4 grid grid-cols-2 gap-2">
            <Input type="date" />
            <Input type="date" />
          </div>

          {/* CTA */}
          <Button>Check Availability</Button>
        </div>
      </div>
    </div>
  );
}

export default RoomDetails;
