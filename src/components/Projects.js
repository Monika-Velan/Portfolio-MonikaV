// import React from "react";
// import { motion } from "framer-motion";
// import "../styles/projects.css";
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// const projects = [
//   {
//     title: "Online Class Platform",
//     time: "2025",
//     desc: (
//       <>
//         <p><strong>Stack:</strong> React | Node.js | Express | MongoDB</p>
//         <ul>
//           <li>Role-based system for admins, teachers, and students.</li>
//           <li>Integrated course management, assignments, and payments.</li>
//           <li>Implemented JWT authentication and role-based access control.</li>
//           <li>Contributed to the Online Class Product development for CeiTCS, handling both UI and server-side logic.</li>
//           <li>Built RESTful APIs for data management and integrated them with React components.</li>
//           <li>Collaborated with the team to improve product performance and deployment workflow.</li>
//         </ul>
//       </>
//     ),
//     github: "https://github.com/monikavelan",
//     live: "#"
//   },
//   {
//     title: "Student Diary Alumni Portal",
//     time: "2023–2024",
//     desc: (
//       <>
//         <p><strong>Stack:</strong> MERN Stack | Socket.io | Email Integration</p>
//         <ul>
//           <li>Built for improved communication and resource sharing among alumni and students.</li>
//           <li>Added real-time chat using Socket.io and notification systems via email.</li>


//         </ul>
//       </>
//     ),
//     github: "https://github.com/monikavelan",
//     live: "#"
//   },
// ];

// const Projects = () => {
//   return (
//     <section id="projects" className="section projects">
//       <h2 className="section-title">Projects</h2>
//       <div className="projects-grid">
//         {projects.map((p, i) => (
//           <motion.article
//             className="project-card"
//             key={i}
//             whileHover={{ scale: 1.03 }}
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: i * 0.12 }}
//             viewport={{ once: true }}
//           >
//             <div className="card-body">
//               <h3>{p.title}</h3>
//               <small className="muted">{p.time}</small>
//               <div className="project-desc">{p.desc}</div>
//             </div>

//             <div className="card-footer">
//               <a href={p.github} target="_blank" rel="noreferrer" className="icon-link">
//                 <FaGithub /> <span>Code</span>
//               </a>
//               <a href={p.live} target="_blank" rel="noreferrer" className="icon-link">
//                 <FaExternalLinkAlt /> <span>Live</span>
//               </a>
//             </div>
//           </motion.article>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;





import React from "react";
import { motion } from "framer-motion";
import "../styles/projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Online Class Platform",
    time: "2025",
    desc: (
      <>
        <p><strong>Stack:</strong> React | Node.js | Express | MongoDB</p>
        <ul>
          <li>Role-based system for admins, teachers, and students.</li>
          <li>Integrated course management, assignments, and payments.</li>
          <li>Implemented JWT authentication and role-based access control.</li>
          <li>Contributed to the Online Class Product development for CeiTCS, handling both UI and server-side logic.</li>
          <li>Built RESTful APIs for data management and integrated them with React components.</li>
          <li>Collaborated with the team to improve product performance and deployment workflow.</li>
        </ul>
      </>
    ),
    github: "#",
    live: "#",
  },
  {
    title: "Student Diary Alumni Portal",
    time: "2023–2024",
    desc: (
      <>
        <p><strong>Stack:</strong> MERN Stack | Socket.io | Email Integration</p>
        <ul>
          <li>Built for improved communication and resource sharing among alumni and students.</li>
          <li>Added real-time chat using Socket.io and notification systems via email.</li>
        </ul>
      </>
    ),
    github: "https://github.com/Monika-Velan",
    live: "https://studentdiary-frontend.vercel.app", // ✅ Added live deployed link
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.article
            className="project-card"
            key={i}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            viewport={{ once: true }}
          >
            <div className="card-body">
              <h3>{p.title}</h3>
              <small className="muted">{p.time}</small>
              <div className="project-desc">{p.desc}</div>
            </div>

            <div className="card-footer">
              <a href={p.github} target="_blank" rel="noreferrer" className="icon-link">
                <FaGithub /> <span>Code</span>
              </a>
              <a href={p.live} target="_blank" rel="noreferrer" className="icon-link">
                <FaExternalLinkAlt /> <span>Live</span>
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
