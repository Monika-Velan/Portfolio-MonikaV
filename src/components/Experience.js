import React from "react";
import { motion } from "framer-motion";
import "../styles/experience.css";

const experiences = [
  {
    role: "MERN Stack Developer Intern",
    company: "CeiTCS (Cloud Enabled Intellectual Technology and Consulting Services)",
    date: "Mar 2025 – Oct 2025 | Chennai, India",
    bullets: [
      "Completed an internship focusing on front-end (CSS, JavaScript, React.js) and back-end (Node.js, Express, MongoDB) technologies.",
      "Contributed to the Online Class Product development for CeiTCS, handling both UI and server-side logic.",
      "Built RESTful APIs for data management and integrated them with React components.",
      "Collaborated with the team to improve product performance and deployment workflow."
    ]
  },
  {
    role: "Full Stack Developer Intern",
    company: "Shiash Info Solution",
    date: "Dec 2024 – Mar 2025 | Chennai, India" ,
    bullets: [
      "Built and maintained backend services using Python and RESTful APIs.",
      "Integrated authentication and database management modules to improve product efficiency."
    ]
  }
];

const Experience = () => (
  <section id="experience" className="section experience">
    <h2 className="section-title">Experience</h2>

    <div className="timeline">
      {experiences.map((e, i) => (
        <motion.div
          className="timeline-item"
          key={i}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          viewport={{ once: true }}
        >
          <div className="ti-left">
            <h3>{e.role}</h3>
            <h4>{e.company}</h4>
            <span className="date">{e.date}</span>
          </div>
          <div className="ti-right">
            <ul>
              {e.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Experience;
