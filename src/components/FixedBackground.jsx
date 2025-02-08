// FixedBackground.jsx
import React from "react";
import "../styles/FixedBackground.css";

const FixedBackground = ({ imageUrl, className = "" }) => {
  return (
    <div
      className={`fixed-background ${className}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
  );
};

export default FixedBackground;
