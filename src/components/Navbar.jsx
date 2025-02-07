import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => setOpen(!open);

  return (
    <>
      <div className="navbar">
        <button className="hamburger" onClick={toggleSidebar}>
          ☰
        </button>
      </div>
      <div className={`sidebar ${open ? "open" : ""}`}>
        {/* <button className="close-btn" onClick={toggleSidebar}>
          ×
        </button> */}
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#section2">About</a>
          </li>
          <li>
            <a href="#section3">Services</a>
          </li>
          <li>
            <a href="#section4">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
