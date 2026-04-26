import React from "react";
import heroImage from "../../assets/hero.jpg";

function Header() {
  return (
    <div className="relative h-[60vh] w-full">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Hotel"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Center Text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h2 className="text-4xl font-bold">Find your perfect stay</h2>
        <p className="mt-3 text-lg">Best rooms, best prices</p>
      </div>
    </div>
  );
}

export default Header;
