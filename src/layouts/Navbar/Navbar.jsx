import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#1A1613] text-white sticky top-0 z-50 border-b border-yellow-600/20">

      {/* Container */}
      <div className="flex items-center justify-between px-6 md:px-10 h-16">

        {/* Logo */}
        <Link to="/" className="text-xl font-semibold text-amber-100">
          The Royal 
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-6 text-sm uppercase tracking-widest text-white/70">
          <li><Link to="/fetch-guest" className="hover:text-yellow-400">Fetch Guest</Link></li>
          <li><Link to="#" className="hover:text-yellow-400">Rooms</Link></li>
          <li><Link to="#" className="hover:text-yellow-400">About</Link></li>
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">

          <button className="hidden lg:block bg-yellow-500 text-black px-4 py-2 text-xs uppercase tracking-widest hover:bg-yellow-400 transition">
            Reserve
          </button>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex flex-col gap-1"
          >
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#1A1613] border-t border-yellow-600/20 px-6 py-4">

          <div className="flex flex-col gap-4 text-sm uppercase text-white/70">
            <Link to="/add-guest" onClick={() => setOpen(false)} className="hover:text-yellow-400">
              Add Guest
            </Link>

            <Link to="/fetch-guest" onClick={() => setOpen(false)} className="hover:text-yellow-400">
              Fetch Guest
            </Link>

            <Link to="#" className="hover:text-yellow-400">
              Rooms
            </Link>

            <Link to="#" className="hover:text-yellow-400">
              About
            </Link>
          </div>

          <button className="w-full mt-4 bg-yellow-500 text-black py-3 text-xs uppercase tracking-widest">
            Reserve Now
          </button>

        </div>
      )}
    </nav>
  );
}

export default Navbar;