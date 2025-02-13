import React, { useRef, useState, useEffect } from "react";
import "../styles/GalleryPage.css";
import PulpoYPapas from "../images/gallerypics/PulpoYPapas.jpeg";
import PokeTacos from "../images/gallerypics/Poke Tacos.jpg";
import CremeBrulee from "../images/gallerypics/Creme Brulee.jpeg";
import DuckBreast from "../images/gallerypics/Duck_Breast_&_Beet_Puree.jpg";
import PestoSpagh from "../images/gallerypics/Pesto_Spaghetti_&_Torched_Salmon.jpg";
import PotatoPave from "../images/gallerypics/Potato_Pave_with_Smoked_Egg_Yolk_&_Caviar.jpg";
import RosePetalTort from "../images/gallerypics/Rose Petal Tortellini.jpeg";
import SalmonTartare from "../images/gallerypics/Salmon_Tartare.jpg";
import ScallopCrudo from "../images/gallerypics/Scallop_Crudo_w_Miso_Beurre_Blanc_&_Caviar.jpg";
import SpicyPesto from "../images/gallerypics/Spicy Pesto Bucatini.jpg";
import FlashCard from "./Flashcard"; // Import the flash card component
import useTextFile from "../hooks/useTextFile";

const GalleryPage = () => {
  const pypRecipe = useTextFile("PyPRecipe.txt");
  const ptRecipe = useTextFile("PTRecipe.txt");
  const pbcbRecipe = useTextFile("PBCBRecipe.txt");

  return (
    <div className="gallerypage" id="gallery">
      <div className="page-header"></div>
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
      <section className="gallery-item">
        <FlashCard
          id="flashcard"
          frontText="Hello, Front Side!"
          backText="Duck Breast & Beet Puree 
          
          Recipe Coming Soon"
          backgroundImage={DuckBreast}
        />
      </section>
      <section className="gallery-item">
        <FlashCard
          id="flashcard"
          frontText="Hello, Front Side!"
          backText="Pesto Spaghetti & Torched Salmon 
          
          Recipe Coming Soon"
          backgroundImage={PestoSpagh}
        />
      </section>
      <section className="gallery-item">
        <FlashCard
          id="flashcard"
          frontText="Hello, Front Side!"
          backText="Potato Pave with Smoked Egg Yolk & Caviar 
          
          Recipe Coming Soon"
          backgroundImage={PotatoPave}
        />
      </section>
      <section className="gallery-item">
        <FlashCard
          id="flashcard"
          frontText="Hello, Front Side!"
          backText="Rose Petal Tortellini 
          
          Recipe Coming Soon"
          backgroundImage={RosePetalTort}
        />
      </section>
      <section className="gallery-item">
        <FlashCard
          id="flashcard"
          frontText="Hello, Front Side!"
          backText="Salmon Tartare 
          
          Recipe Coming Soon"
          backgroundImage={SalmonTartare}
        />
      </section>
      <section className="gallery-item">
        <FlashCard
          id="flashcard"
          frontText="Hello, Front Side!"
          backText="Scallop Crudo with Miso Beurre Blanc & Caviar 
          
          Recipe Coming Soon"
          backgroundImage={ScallopCrudo}
        />
      </section>
      <section className="gallery-item">
        <FlashCard
          id="flashcard"
          frontText="Hello, Front Side!"
          backText="Spicy Pesto Bucatini 
          
          Recipe Coming Soon"
          backgroundImage={SpicyPesto}
        />
      </section>
    </div>
  );
};

export default GalleryPage;
