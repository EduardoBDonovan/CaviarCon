import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/ContactPage.css";
import ConFood from "../images/Con_Food.jpg";

import { SiTiktok, SiInstagram } from "react-icons/si";
import { FiPhone, FiMail } from "react-icons/fi";

const ContactPage = () => {
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
    <div className="contactpage" id="contact">
      {/* Section 5: Third Image with contact form in the middle */}
      <section
        className="contact-parallax contact-image-section"
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

export default ContactPage;
