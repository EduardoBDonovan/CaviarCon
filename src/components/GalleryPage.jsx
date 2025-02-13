import React, { useRef, useState, useEffect } from "react";
import "../styles/GalleryPage.css";
import PulpoYPapas from "../images/gallerypics/PulpoYPapas.jpeg";
import PokeTacos from "../images/gallerypics/Poke Tacos.jpg";
import CremeBrulee from "../images/gallerypics/Creme Brulee.jpeg";
import FlashCard from "./Flashcard"; // Import the flash card component
import useTextFile from "../hooks/useTextFile";

const GalleryPage = () => {
  const pypRecipe = useTextFile("PyPRecipe.txt");
  const ptRecipe = useTextFile("PTRecipe.txt");
  const pbcbRecipe = useTextFile("PBCBRecipe.txt");

  return (
    <div className="gallerypage" id="gallery">
      <section className="gallery-item">
        <FlashCard
          frontText="Hello, Front Side!"
          backText={pypRecipe}
          backgroundImage={PulpoYPapas}
        />
      </section>
      <section className="gallery-item">
        <FlashCard
          id="flashcard"
          frontText="Hello, Front Side!"
          backText={ptRecipe}
          backgroundImage={PokeTacos}
        />
      </section>
      <section className="gallery-item">
        <FlashCard
          id="flashcard"
          frontText="Hello, Front Side!"
          backText={pbcbRecipe}
          backgroundImage={CremeBrulee}
        />
      </section>
    </div>
  );
};

export default GalleryPage;
