import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/ContactPage.css";
import ConFood from "../images/Con_Food.jpg";
import ContactForm from "./ContactForm";

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
        <ContactForm />
      </section>
    </div>
  );
};

export default ContactPage;
