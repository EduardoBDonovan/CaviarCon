// FixedBackground.jsx
import React from "react";
import "./FixedBackground.css";

const FixedBackground = ({ imageUrl, className = "" }) => {
  return (
    <div
      className={`fixed-background ${className}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
  );
};

export default FixedBackground;
