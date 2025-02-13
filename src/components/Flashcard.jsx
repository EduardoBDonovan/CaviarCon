import React, { useState } from "react";
import "../styles/FlashCard.css";
import { Link } from "react-router-dom";

const FlashCard = ({ frontText, backText, backgroundImage }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  const renderBackText = (text) => {
    return text.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className="flashcard-container" onClick={handleClick}>
      <div
        className={`flashcard ${flipped ? "flipped" : ""}`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flashcard-face flashcard-back">
          <p>{renderBackText(backText)}</p>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
