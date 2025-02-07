import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => setOpen(!open);

  return (
    <>
      {/* Fixed hamburger button when sidebar is closed */}
      {!open && (
        <button className="hamburger-fixed" onClick={toggleSidebar}>
          ☰
        </button>
      )}

      {/* Sidebar with sliding animation */}
      <div className={`sidebar ${open ? "open" : ""}`}>
        {/* Hamburger button inside the sidebar */}
        <button className="hamburger-sidebar" onClick={toggleSidebar}>
          ☰
        </button>
        <div className="nav-container">
          <ul>
            <li>
              <a href="#home" onClick={toggleSidebar}>
                Home
              </a>
            </li>
            <li>
              <a href="#section2" onClick={toggleSidebar}>
                About
              </a>
            </li>
            <li>
              <a href="#section3" onClick={toggleSidebar}>
                Services
              </a>
            </li>
            <li>
              <a href="#section4" onClick={toggleSidebar}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
