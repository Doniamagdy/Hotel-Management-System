import { useState } from "react";

const FOOTER_LINKS = {
  Explore: ["Rooms & Suites", "Dining", "Spa & Wellness", "Events & Weddings", "Gallery"],
  Services: ["Airport Transfer", "Concierge", "Room Service", "Valet Parking", "Business Center"],
  Company: ["About Us", "Careers", "Press & Media", "Sustainability", "Contact"],
};

const SOCIAL_ICONS = [
  {
    label: "Instagram",
    path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01M7.5 2h9A5.5 5.5 0 0122 7.5v9A5.5 5.5 0 0116.5 22h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2z",
  },
  {
    label: "Facebook",
    path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
  },
  {
    label: "Twitter / X",
    path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
  },
  {
    label: "LinkedIn",
    path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer
      className="font-sans w-full"
      style={{
        background: "#1A1613",
        fontFamily: "'Jost', sans-serif",
        borderTop: "1px solid rgba(201,168,76,0.2)",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Jost:wght@300;400;500&display=swap');
        .footer-link {
          color: rgba(245,240,232,0.5);
          font-size: 13px;
          letter-spacing: 0.4px;
          text-decoration: none;
          transition: color 0.2s, padding-left 0.2s;
          display: inline-block;
        }
        .footer-link:hover { color: #C9A84C; padding-left: 4px; }
        .social-btn {
          width: 36px; height: 36px;
          border: 1px solid rgba(201,168,76,0.22);
          display: flex; align-items: center; justify-content: center;
          color: rgba(245,240,232,0.5);
          cursor: pointer;
          background: transparent;
          transition: all 0.2s;
        }
        .social-btn:hover { border-color: #C9A84C; color: #C9A84C; background: rgba(201,168,76,0.07); }
        .newsletter-input {
          flex: 1;
          background: rgba(245,240,232,0.05);
          border: 1px solid rgba(201,168,76,0.2);
          border-right: none;
          color: #F5F0E8;
          padding: 11px 16px;
          font-family: 'Jost', sans-serif;
          font-size: 12.5px;
          letter-spacing: 0.5px;
          outline: none;
          transition: border-color 0.2s;
        }
        .newsletter-input::placeholder { color: rgba(138,128,117,0.7); }
        .newsletter-input:focus { border-color: rgba(201,168,76,0.5); }
        .newsletter-btn {
          background: #C9A84C;
          color: #1A1613;
          border: none;
          padding: 11px 20px;
          font-family: 'Jost', sans-serif;
          font-size: 10.5px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.2s;
        }
        .newsletter-btn:hover { background: #E8D5A3; }
        .bottom-link {
          color: rgba(138,128,117,0.6);
          font-size: 11.5px;
          text-decoration: none;
          letter-spacing: 0.3px;
          transition: color 0.2s;
        }
        .bottom-link:hover { color: #C9A84C; }
      `}</style>

      {/* ── Top strip ── */}
      <div
        className="flex items-center justify-between flex-wrap gap-4 px-10 py-4"
        style={{ borderBottom: "1px solid rgba(201,168,76,0.12)" }}
      >
        <div className="flex items-center gap-3">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.13 1 .36 1.97.7 2.91a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.17-1.17a2 2 0 012.11-.45c.94.34 1.91.57 2.91.7A2 2 0 0122 16.92z" />
          </svg>
          <span style={{ color: "rgba(245,240,232,0.55)", fontSize: 12.5, letterSpacing: "0.4px" }}>
            +20 2 1234 5678
          </span>
        </div>

        <div className="flex items-center gap-3">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <span style={{ color: "rgba(245,240,232,0.55)", fontSize: 12.5, letterSpacing: "0.4px" }}>
            reservations@grandcollection.com
          </span>
        </div>

        <div className="flex items-center gap-3">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span style={{ color: "rgba(245,240,232,0.55)", fontSize: 12.5, letterSpacing: "0.4px" }}>
            Corniche El Nil, Cairo, Egypt
          </span>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="px-10 py-14 grid gap-12" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>

        {/* Brand column */}
        <div className="flex flex-col gap-5" style={{ minWidth: 200 }}>
          <a href="#" className="flex items-center gap-2.5 no-underline">
            <div
              className="flex items-center justify-center flex-shrink-0"
              style={{ width: 36, height: 36, border: "1.5px solid #C9A84C" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
                <path d="M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M9 21v-6h6v6" />
              </svg>
            </div>
            <div>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 20,
                  fontWeight: 600,
                  color: "#F5F0E8",
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  display: "block",
                  lineHeight: 1,
                }}
              >
                Grand
              </span>
              <span
                style={{
                  fontSize: 8.5,
                  letterSpacing: "4px",
                  color: "#C9A84C",
                  textTransform: "uppercase",
                  display: "block",
                  marginTop: 2,
                }}
              >
                Collection
              </span>
            </div>
          </a>

          <p style={{ color: "rgba(245,240,232,0.4)", fontSize: 13, lineHeight: 1.8, maxWidth: 240 }}>
            Where luxury meets timeless elegance. An unforgettable experience in the heart of Cairo.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-2 mt-1">
            {SOCIAL_ICONS.map((s) => (
              <button key={s.label} className="social-btn" aria-label={s.label}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d={s.path} />
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
          <div key={heading} className="flex flex-col gap-4">
            <h4
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: 9,
                letterSpacing: "3.5px",
                textTransform: "uppercase",
                color: "#C9A84C",
                fontWeight: 500,
                margin: 0,
              }}
            >
              {heading}
            </h4>
            <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="footer-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter column */}
        <div className="flex flex-col gap-4" style={{ minWidth: 220 }}>
          <h4
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: 9,
              letterSpacing: "3.5px",
              textTransform: "uppercase",
              color: "#C9A84C",
              fontWeight: 500,
              margin: 0,
            }}
          >
            Newsletter
          </h4>
          <p style={{ color: "rgba(245,240,232,0.4)", fontSize: 13, lineHeight: 1.75, margin: 0 }}>
            Receive exclusive offers, curated travel stories, and seasonal packages.
          </p>

          {subscribed ? (
            <div
              className="flex items-center gap-2 py-3 px-4"
              style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span style={{ color: "#C9A84C", fontSize: 12, letterSpacing: "0.5px" }}>You're subscribed!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex" style={{ marginTop: 2 }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-btn">
                Join
              </button>
            </form>
          )}

          {/* Award badges */}
          <div className="flex items-center gap-3 mt-2 flex-wrap">
            {["5-Star Luxury", "Forbes Travel", "World's Best"].map((badge) => (
              <span
                key={badge}
                style={{
                  fontSize: 9.5,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "rgba(201,168,76,0.7)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  padding: "4px 10px",
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div style={{ borderTop: "1px solid rgba(201,168,76,0.12)", margin: "0 40px" }} />

      {/* ── Bottom bar ── */}
      <div className="flex items-center justify-between flex-wrap gap-3 px-10 py-5">
        <p style={{ color: "rgba(138,128,117,0.55)", fontSize: 11.5, letterSpacing: "0.3px", margin: 0 }}>
          © {new Date().getFullYear()} Grand Collection Hotels. All rights reserved.
        </p>
        <div className="flex items-center gap-5 flex-wrap">
          {["Privacy Policy", "Terms of Use", "Cookie Preferences", "Accessibility"].map((item) => (
            <a key={item} href="#" className="bottom-link">{item}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}