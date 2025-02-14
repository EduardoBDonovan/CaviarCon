import React from "react";
import "../styles/HomePage.css";
import ContactForm from "./ContactForm";

const HomePage = () => {
  return (
    <div className="homepage" id="home">
      <div className="homebody"></div>
      <section className="image-section">
        <div className="split-text">
          <div className="top-third">
            <h1>
              Culinary Experiences
              <br className="mobile-break" /> by
              <br className="mobile-break" /> Connor McGlynn
            </h1>
          </div>
          <div className="middle-third"></div>
          <div className="bottom-third">
            <h1>San Diego Based Private Chef</h1>
          </div>
        </div>
      </section>
      <section className="green-section">
        <h2>Intimate Fine Dining Experiences From The Comfort Of Your Home</h2>
      </section>
      <section className="image-section">
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
      <section className="green-section">
        <h2>Get In Touch For Your Next Dinner Party</h2>
      </section>
      <section className="image-section">
        <ContactForm />
      </section>
      {/* <section
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
          <div className="middle-third"></div>
          <div className="bottom-third">
            <h1>San Diego Based Private Chef</h1>
          </div>
        </div>
      </section>

      <section className="green-section">
        <h2>Intimate Fine Dining Experiences From The Comfort Of Your Home</h2>
      </section>
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

      <section className="green-section">
        <h2>Get In Touch For Your Next Dinner Party</h2>
      </section>

      <section
        className="parallax image-section"
        style={{ backgroundImage: `url(${ConFood})` }}
      >
        <ContactForm />
      </section> */}
    </div>
  );
};

export default HomePage;
