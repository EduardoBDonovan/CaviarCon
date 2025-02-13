import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/HomePage.css";
import ConFront from "../images/Con_Front.jpg";
import ConSide from "../images/Con_Side.jpg";
import ConFood from "../images/Con_Food.jpg";

const HomePage = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_PUBLIC_KEY' with your actual EmailJS credentials.
    emailjs.init({
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    });
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

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
              Culinary Experiences by
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
        <div className="split-text">
          <div className="top-third"></div>
          <div className="middle-third">
            <form ref={form} onSubmit={handleSubmit} className="contact_form">
              <input type="text" name="user_name" placeholder="Name" required />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
              />
              <textarea
                name="user_message"
                placeholder="Message"
                required
              ></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
          <div className="bottom-third"></div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
