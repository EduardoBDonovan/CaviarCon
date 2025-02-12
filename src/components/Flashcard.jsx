import React, { useState } from "react";
import "../styles/FlashCard.css";
import { Link } from "react-router-dom";

const FlashCard = ({ frontText, backText, backgroundImage }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="flashcard-container" onClick={handleClick}>
      <div
        className={`flashcard ${flipped ? "flipped" : ""}`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flashcard-face flashcard-back">
          <Link to="/recipes" onClick={(e) => e.stopPropagation()}>
            {backText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
