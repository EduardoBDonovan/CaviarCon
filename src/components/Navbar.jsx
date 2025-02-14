import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => setOpen(!open);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setOpen(false); // Close the sidebar
  };

  return (
    <>
      {/* Fixed hamburger button when sidebar is closed */}
      {!open && (
        <button className="hamburger-fixed" onClick={toggleSidebar}>
          ☰
        </button>
      )}

      {/* Overlay that covers the entire screen when the sidebar is open */}
      {open && <div className="overlay" onClick={toggleSidebar}></div>}

      {/* Sidebar with sliding animation */}
      <div className={`sidebar ${open ? "open" : ""}`}>
        {/* Hamburger button inside the sidebar */}
        <button className="hamburger-sidebar" onClick={toggleSidebar}>
          ☰
        </button>
        <div className="nav-container">
          <ul>
            <li>
              <Link to="/" onClick={(toggleSidebar, scrollToTop)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={(toggleSidebar, scrollToTop)}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={(toggleSidebar, scrollToTop)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
