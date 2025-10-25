import React from "react";
import { motion } from "framer-motion";
import "../styles/education.css";

const educationData = [
  {
    type: "Academic",
    institution: "SRM Institute of Science and Technology",
    course: "M.Sc. Computer Science",
    year: "2025",
    grade: "CGPA: 9.64/10.0"
  },
  {
    type: "Academic",
    institution: "Adhiparasakthi College of Arts and Science",
    course: "B.Sc. Computer Science",
    year: "2023",
    grade: "CGPA: 8.2/10.0"
  }
];

const academicCerts = [
  {
    institution: "Loyola College (NIAC 2025)",
    course: "Research Paper Certificate of Appreciation",
    year: "2025",
  }
];

const technicalCerts = [
  {
    institution: "Power BI Workshop",
    course: "Real-World Analytics with Microsoft Power BI",
    year: "2024"
  },
  {
    institution: "Udemy",
    course: "Full-Stack Web Development",
    year: "2024"
  }
];

const Section = ({ title, items, colorClass }) => (
  <div className={`edu-section ${colorClass}`}>
    <h3 className="edu-section-title">{title}</h3>
    <div className="edu-container">
      {items.map((item, index) => (
        <motion.div
          className="edu-card"
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          viewport={{ once: true }}
        >
          <div className="edu-header">
            <span className="edu-type">{title}</span>
            <span className="edu-year">{item.year}</span>
          </div>
          <h3 className="edu-institution">{item.institution}</h3>
          <p className="edu-course">{item.course}</p>
          {item.grade && <p className="edu-grade">{item.grade}</p>}
        </motion.div>
      ))}
    </div>
  </div>
);

const Education = () => {
  return (
    <section id="education" className="section education">
      <h2 className="section-title">Education & Certifications</h2>

      <Section
        title="Academic Education"
        items={educationData}
        colorClass="edu-academic"
      />

      <Section
        title="Academic Certifications"
        items={academicCerts}
        colorClass="edu-academic-certs"
      />

      <Section
        title="Technical & Professional Certifications"
        items={technicalCerts}
        colorClass="edu-tech-certs"
      />
    </section>
  );
};

export default Education;
