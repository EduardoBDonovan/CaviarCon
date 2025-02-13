import React, { useState } from "react";
import "../styles/Footer.css";
import { SiTiktok, SiInstagram } from "react-icons/si";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <a
            href="https://www.tiktok.com/@caviarcon?_t=8qDxp0BJ4yl&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTiktok />
          </a>
          <a
            href="https://instagram.com/connormcglynn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiInstagram />
          </a>
          <a href="mailto:connor@caviarcon.com">
            <FiMail />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
