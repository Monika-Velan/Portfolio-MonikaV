import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "../styles/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Message from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`;
    // Opens default email client
    window.location.href = `mailto:monikavelan2003@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact-grid">
        <div className="contact-card">
          <h3>Get in touch</h3>
          <p>Email: <a href="mailto:monikavelan2003@gmail.com">monikavelan2003@gmail.com</a></p>
          <p>Phone: <a href="tel:+919345519385">+91 93455 19385</a></p>
          <div className="contact-icons">
            <a href="https://github.com/monikavelan" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/monika-v-237b34255/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="mailto:monikavelan2003@gmail.com"><FaEnvelope /></a>
          </div>
        </div>

        <div className="contact-card">
          <h3>Quick message</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Your name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              name="email"
              type="email"
              placeholder="Your email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit" className="btn">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

