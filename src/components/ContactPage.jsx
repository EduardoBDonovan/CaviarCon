import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/ContactPage.css";
import ConFood from "../images/Con_Food.jpg";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <div className="contactpage" id="contact">
      <div className="contactbody"></div>
      <section className="contact-parallax contact-image-section">
        <ContactForm />
      </section>
    </div>
  );
};

export default ContactPage;
