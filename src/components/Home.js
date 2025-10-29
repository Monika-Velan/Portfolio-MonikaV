import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import "../styles/section.css";
import animatedProfile from "../assets/profile portfolio.jpg";

const aboutDetails = [
  "Web Developer experienced in responsive, user-friendly web applications.",
  "Skilled in HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
  "Passionate about building efficient web solutions with strong UI/UX focus.",
  "Enjoys team collaboration and exploring modern design and animation techniques.",
  // add or shorten as needed, each string will be a bullet point
];

const contactDetails = [
  { label: "Email", value: "monikavelan2003@gmail.com" },
  { label: "Phone", value: "+91 93455 19385" },
  { label: "Location", value: "Chennai, India" },
];

const Home = () => (
  <section id="home" className="home-portfolio merged-hero">
    <div className="portfolio-content compact">
      <div className="portfolio-image-wrapper">
        <motion.img
          src={animatedProfile}
          alt="Monika V"
          className="portfolio-profile-img"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
      <div className="portfolio-text about-col">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I’m <span className="accent">Monika V</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <p className="subtitle">
            Web Developer • MERN Stack <br />
            Building responsive & accessible websites
          </p>
          <ul className="about-list-home">
            {aboutDetails.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
          <ul className="about-contact-list">
            {contactDetails.map((item) => (
              <li key={item.label}><strong>{item.label}:</strong> {item.value}</li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="portfolio-btn-row"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <ScrollLink to="projects" smooth duration={600} className="btn">
            View Projects
          </ScrollLink>
          <a
            className="btn ghost"
            href="mailto:monikavelan2003@gmail.com"
            rel="noreferrer"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Home;
