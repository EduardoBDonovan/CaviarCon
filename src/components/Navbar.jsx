import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

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
              <Link to="/" onClick={toggleSidebar}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={toggleSidebar}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/recipes" onClick={toggleSidebar}>
                Recipes
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleSidebar}>
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
