import React from "react";
import "../styles/HomePage.css";
import Navbar from "./Navbar";
import ConFront from "../images/Con_Front.jpg";
import ConSide from "../images/Con_Side.jpg";
import ConFood from "../images/Con_Food.jpg";

const HomePage = () => {
  return (
    <div className="homepage" id="home">
      {/* Static Navbar */}
      <Navbar />

      {/* Section 1: Image with overlay text */}
      <section
        className="parallax image-section"
        style={{ backgroundImage: `url(${ConFront})` }}
      >
        <h1>Welcome to Caviar Con</h1>
      </section>

      {/* Section 2: Green section */}
      <section className="green-section">
        <h2>Fine Dining Experiences</h2>
      </section>

      {/* Section 3: Image with overlay text */}
      <section
        className="parallax image-section"
        style={{ backgroundImage: `url(${ConSide})` }}
      >
        <h2>Seasonal Curated Menus</h2>
      </section>

      {/* Section 4: Another green section */}
      <section className="green-section">
        <h2>Get In Touch For Your Next Dinner Party</h2>
      </section>

      {/* Section 5: Image section (no overlay text) */}
      <section
        className="parallax image-section"
        style={{ backgroundImage: `url(${ConFood})` }}
      ></section>

      {/* Footer */}
      <footer className="footer">
        <p>Footer Content</p>
      </footer>
    </div>
  );
};

export default HomePage;
