// src/components/ContactForm.jsx
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/ContactForm.css"; // Optionally create this file or use an existing CSS file

const ContactForm = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Initialize EmailJS with your public key
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
    <form ref={form} onSubmit={handleSubmit} className="contact_form">
      <input type="text" name="user_name" placeholder="Name" required />
      <input type="email" name="user_email" placeholder="Email" required />
      <textarea
        type="text"
        name="user_message"
        placeholder="Message"
        required
      ></textarea>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
