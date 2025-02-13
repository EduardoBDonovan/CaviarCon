import React from "react";
import "../styles/HomePage.css";
import ConFront from "../images/Con_Front.jpg";
import ConSide from "../images/Con_Side.jpg";
import ConFood from "../images/Con_Food.jpg";
import ContactForm from "./ContactForm";

const HomePage = () => {
  return (
    <div className="homepage" id="home">
      {/* Section 1: First Image with split overlay text */}
      <section
        className="parallax image-section"
        style={{ backgroundImage: `url(${ConSide})` }}
      >
        <div className="split-text">
          <div className="top-third">
            <h1>
              Culinary Experiences
              <br className="mobile-break" /> by
              <br className="mobile-break" /> Connor McGlynn
            </h1>
          </div>
          <div className="middle-third">{/* Intentionally left blank */}</div>
          <div className="bottom-third">
            <h1>San Diego Based Private Chef</h1>
          </div>
        </div>
      </section>

      {/* Section 2: Green section */}
      <section className="green-section">
        <h2>Intimate Fine Dining Experiences From The Comfort Of Your Home</h2>
      </section>

      {/* Section 3: Second Image with centered overlay text */}
      <section
        className="parallax image-section"
        style={{ backgroundImage: `url(${ConFront})` }}
      >
        <div className="split-text">
          <div className="top-third">
            <h2>Seasonal Curated Menus</h2>
          </div>
          <div className="middle-third">
            <h2>Quality Ingredients</h2>
          </div>
          <div className="bottom-third">
            <h2>Unforgettable Experiences</h2>
          </div>
        </div>
      </section>

      {/* Section 4: Another green section */}
      <section className="green-section">
        <h2>Get In Touch For Your Next Dinner Party</h2>
      </section>

      {/* Section 5: Third Image with contact form in the middle */}
      <section
        className="parallax image-section"
        style={{ backgroundImage: `url(${ConFood})` }}
      >
        <ContactForm />
      </section>
    </div>
  );
};

export default HomePage;
