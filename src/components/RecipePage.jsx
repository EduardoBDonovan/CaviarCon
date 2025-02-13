import React, { useRef } from "react";
import "../styles/RecipePage.css";
import PulpoYPapas from "../images/gallerypics/PulpoYPapas.jpeg";
import PokeTacos from "../images/gallerypics/PokeTacosTemp.jpg";
import FlashCard from "./Flashcard"; // Import the flash card component
import { SiTiktok, SiInstagram } from "react-icons/si";
import { FiMail } from "react-icons/fi";

const RecipePage = () => {
  const form = useRef();

  return (
    <div className="recipepage" id="recipes">
      <section className="recipe-item">
        <FlashCard
          frontText="Hello, Front Side!"
          backText="Recipe Page"
          backgroundImage={PulpoYPapas}
        />
      </section>
      <section className="recipe-item">
        <FlashCard
          id="flashcard"
          frontText="Hello, Front Side!"
          backText="Poke Tacos Recipe"
          backgroundImage={PokeTacos}
        />
      </section>
      <section className="recipe-item">
        <FlashCard
          id="flashcard"
          frontText="Hello, Front Side!"
          backText="Poke Tacos Recipe"
          backgroundImage={PokeTacos}
        />
      </section>
    </div>
  );
};

export default RecipePage;
