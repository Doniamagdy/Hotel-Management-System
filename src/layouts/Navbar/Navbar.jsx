import React from "react";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Rooms", href: "#" },
  { label: "Dining", href: "#" },
  { label: "Spa & Wellness", href: "#" },
];

const NAV_LINKS_SECONDARY = [
  { label: "Events", href: "#" },
  { label: "Gallery", href: "#" },
  { label: "About", href: "#" },
];

const MOBILE_LINKS = [
  "Rooms & Suites",
  "Dining",
  "Spa & Wellness",
  "Events & Weddings",
  "Gallery",
  "About",
];
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Rooms");
  const [activeMobile, setActiveMobile] = useState("Rooms & Suites");

  return (
    <div className="font-sans">
      {/* ── Google Fonts inject ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Jost:wght@300;400;500&display=swap');
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-jost { font-family: 'Jost', sans-serif; }
        .nav-link-underline {
          position: relative;
        }
        .nav-link-underline::after {
          content: '';
          position: absolute;
          bottom: 0; left: 16px; right: 16px;
          height: 1px;
          background: #C9A84C;
          transform: scaleX(0);
          transition: transform 0.25s ease;
        }
        .nav-link-underline:hover::after,
        .nav-link-underline.active::after {
          transform: scaleX(1);
        }
        .mobile-menu-enter {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .mobile-menu-enter.open {
          max-height: 600px;
        }
        .mobile-link {
          border-left: 2px solid transparent;
          transition: all 0.22s ease;
          padding-left: 28px;
        }
        .mobile-link:hover,
        .mobile-link.active {
          border-left-color: #C9A84C;
          background: rgba(201,168,76,0.06);
          padding-left: 36px;
        }
        .ham-span {
          display: block;
          width: 22px;
          height: 1.5px;
          background: #F5F0E8;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          transform-origin: center;
        }
        .ham-open .ham-1 { transform: translateY(6.5px) rotate(45deg); }
        .ham-open .ham-2 { opacity: 0; transform: scaleX(0); }
        .ham-open .ham-3 { transform: translateY(-6.5px) rotate(-45deg); }
        .btn-reserve-hover:hover { background: #E8D5A3; transform: translateY(-1px); }
        .btn-reserve-hover { transition: background 0.2s, transform 0.15s; }
      `}</style>

      {/* ── Main Navbar ── */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-10 font-jost"
        style={{
          background: "#1A1613",
          height: 68,
          borderBottom: "1px solid rgba(201,168,76,0.25)",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 no-underline flex-shrink-0"
        >
          <div
            className="flex items-center justify-center"
            style={{ width: 36, height: 36, border: "1.5px solid #C9A84C" }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="1.5"
            >
              <path d="M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M9 21v-6h6v6" />
            </svg>
          </div>
          <div>
            <span
              className="font-cormorant block uppercase tracking-widest"
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: "#F5F0E8",
                letterSpacing: "2.5px",
              }}
            >
              Grand
            </span>
            <span
              className="font-jost block uppercase"
              style={{
                fontSize: 8.5,
                letterSpacing: "4px",
                color: "#C9A84C",
                marginTop: 1,
              }}
            >
              Collection
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center list-none gap-0 m-0 p-0">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={`nav-link-underline font-jost no-underline uppercase px-4 py-2 font-normal ${
                  activeLink === link.label ? "active" : ""
                }`}
                style={{
                  fontSize: 11.5,
                  letterSpacing: "2px",
                  color:
                    activeLink === link.label
                      ? "#C9A84C"
                      : "rgba(245,240,232,0.65)",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* Divider */}
          <div
            style={{
              width: 1,
              height: 18,
              background: "rgba(201,168,76,0.22)",
              margin: "0 6px",
            }}
          />

          {NAV_LINKS_SECONDARY.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={`nav-link-underline font-jost no-underline uppercase px-4 py-2 font-normal ${
                  activeLink === link.label ? "active" : ""
                }`}
                style={{
                  fontSize: 11.5,
                  letterSpacing: "2px",
                  color:
                    activeLink === link.label
                      ? "#C9A84C"
                      : "rgba(245,240,232,0.65)",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          {/* Search */}
          <button
            className="flex items-center justify-center bg-transparent border-none cursor-pointer p-1.5"
            style={{
              color: "rgba(245,240,232,0.55)",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(245,240,232,0.55)")
            }
            aria-label="Search"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>

          {/* Language */}
          <button
            className="flex items-center justify-center bg-transparent border-none cursor-pointer p-1.5"
            style={{
              color: "rgba(245,240,232,0.55)",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(245,240,232,0.55)")
            }
            aria-label="Language"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" />
            </svg>
          </button>

          {/* Reserve button — hidden on mobile */}
          <button
            className="hidden lg:block btn-reserve-hover border-none cursor-pointer font-jost font-medium uppercase"
            style={{
              background: "#C9A84C",
              color: "#1A1613",
              padding: "9px 22px",
              fontSize: 10.5,
              letterSpacing: "2px",
            }}
          >
            Reserve Now
          </button>

          {/* Hamburger — shown on mobile */}
          <button
            className={`lg:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1 ${menuOpen ? "ham-open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className="ham-span ham-1" />
            <span className="ham-span ham-2" />
            <span className="ham-span ham-3" />
          </button>
        </div>
      </nav>

      {/* ── Mobile Dropdown ── */}
      <div
        className={`mobile-menu-enter lg:hidden sticky top-[68px] z-40 font-jost ${menuOpen ? "open" : ""}`}
        style={{
          background: "#1A1613",
          borderBottom: "1px solid rgba(201,168,76,0.18)",
        }}
      >
        <div style={{ padding: "8px 0 28px" }}>
          {/* Section label */}
          <p
            className="uppercase"
            style={{
              padding: "18px 28px 6px",
              fontSize: 9,
              letterSpacing: "3.5px",
              color: "rgba(138,128,117,0.65)",
            }}
          >
            Navigate
          </p>

          {/* Links */}
          <ul className="list-none m-0 p-0">
            {MOBILE_LINKS.map((label) => (
              <li key={label}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveMobile(label);
                    setMenuOpen(false);
                  }}
                  className={`mobile-link font-cormorant flex items-center justify-between no-underline pr-7 py-3 ${
                    activeMobile === label ? "active" : ""
                  }`}
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    letterSpacing: "0.5px",
                    color:
                      activeMobile === label
                        ? "#C9A84C"
                        : "rgba(245,240,232,0.6)",
                  }}
                >
                  {label}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    style={{ opacity: 0.35 }}
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <hr
            style={{
              border: "none",
              borderTop: "1px solid rgba(201,168,76,0.12)",
              margin: "14px 28px",
            }}
          />

          {/* CTA Buttons */}
          <div className="flex flex-col gap-2.5" style={{ margin: "0 28px" }}>
            <button
              className="w-full font-jost font-medium uppercase cursor-pointer border-none"
              style={{
                background: "#C9A84C",
                color: "#1A1613",
                padding: "14px",
                fontSize: 11,
                letterSpacing: "2.5px",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#E8D5A3")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#C9A84C")
              }
            >
              Reserve a Room
            </button>
            <button
              className="w-full font-jost uppercase cursor-pointer bg-transparent"
              style={{
                color: "rgba(245,240,232,0.5)",
                border: "1px solid rgba(201,168,76,0.25)",
                padding: "13px",
                fontSize: 11,
                letterSpacing: "2px",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#F5F0E8";
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(245,240,232,0.5)";
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)";
              }}
            >
              View Offers
            </button>
          </div>

          {/* Contact info */}
          <div
            className="flex items-center flex-wrap gap-5"
            style={{ padding: "20px 28px 0" }}
          >
            <div
              className="flex items-center gap-1.5"
              style={{ color: "rgba(138,128,117,0.75)", fontSize: 11.5 }}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="1.5"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.13 1 .36 1.97.7 2.91a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.17-1.17a2 2 0 012.11-.45c.94.34 1.91.57 2.91.7A2 2 0 0122 16.92z" />
              </svg>
              +20 2 1234 5678
            </div>
            <div
              className="flex items-center gap-1.5"
              style={{ color: "rgba(138,128,117,0.75)", fontSize: 11.5 }}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="1.5"
              >
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Cairo, Egypt
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
