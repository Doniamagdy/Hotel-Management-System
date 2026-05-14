import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white  sticky top-0 z-50  ">

      {/* Container */}
      <div className="flex items-center justify-between px-6 md:px-10 h-16">

        {/* Logo */}
        <Link to="/" className="text-xl font-semibold">
          The Royal 
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-6 text-sm uppercase tracking-widest ">
          <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>

          <li><Link to="#" className="hover:text-yellow-400">About</Link></li>
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex flex-col gap-1"
          >
            <span className="w-6 h-[2px] bg-gray-900"></span>
            <span className="w-6 h-[2px] bg-gray-900"></span>
            <span className="w-6 h-[2px] bg-gray-900"></span>
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t  px-6 py-4">

          <div className="flex flex-col gap-4 text-sm uppercase ">
            <Link to="/" onClick={() => setOpen(false)} className="hover:text-yellow-400">
            Home
            </Link>

            <Link to="/fetch-guest" onClick={() => setOpen(false)} className="hover:text-yellow-400">
              About
            </Link>

           
          </div>

        

        </div>
      )}
    </nav>
  );
}

export default Navbar;