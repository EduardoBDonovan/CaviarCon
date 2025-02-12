import React, { useRef } from "react";
import "../styles/GalleryPage.css";
import ConFront from "../images/Con_Front.jpg";
import PulpoYPapas from "../images/gallerypics/PulpoYPapas.jpeg";
import PokeTacos from "../images/gallerypics/PokeTacosTemp.jpg";
import FlashCard from "./Flashcard"; // Import the flash card component
import { SiTiktok, SiInstagram } from "react-icons/si";
import { FiPhone, FiMail } from "react-icons/fi";

const GalleryPage = () => {
  const form = useRef();

  return (
    <div className="gallerypage" id="gallery">
      {/* <section className="page-header">
        <h1>Gallery Page</h1>
      </section> */}

      <section className="gallery-item">
        <FlashCard
          frontText="Hello, Front Side!"
          backText="Pulpo Y Papas Recipe"
          backgroundImage={PulpoYPapas}
        />
      </section>
      <section className="gallery-item">
        <FlashCard
          id="flashcard"
          frontText="Hello, Front Side!"
          backText="Poke Tacos Recipe"
          backgroundImage={PokeTacos}
        />
      </section>
      <section className="gallery-item">
        <FlashCard
          id="flashcard"
          frontText="Hello, Front Side!"
          backText="Poke Tacos Recipe"
          backgroundImage={PokeTacos}
        />
      </section>

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
    </div>
  );
};

export default GalleryPage;
