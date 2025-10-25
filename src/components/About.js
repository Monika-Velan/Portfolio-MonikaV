// // // // import React from "react";
// // // // import { motion } from "framer-motion";
// // // // import "../styles/section.css";

// // // // const About = () => {
// // // //   return (
// // // //     <section id="about" className="section about">
// // // //       <motion.div
// // // //         className="container split"
// // // //         initial={{ opacity: 0, x: -20 }}
// // // //         whileInView={{ opacity: 1, x: 0 }}
// // // //         transition={{ duration: 0.6 }}
// // // //         viewport={{ once: true }}
// // // //       >
// // // //         <div className="left">
// // // //           <img
// // // //             src="/profile.jpg"
// // // //             alt="Monika V"
// // // //             className="profile-pic"
// // // //             onError={(e) => {
// // // //               e.target.onerror = null;
// // // //               e.target.src =
// // // //                 "https://via.placeholder.com/280x320.png?text=Profile+Photo";
// // // //             }}
// // // //           />
// // // //         </div>
// // // //         <div className="right">
// // // //           <h2>About Me</h2>
// // // //           <p>
// // // //             I'm a Web Developer experienced in building responsive and user-friendly
// // // //             websites using React, Node.js and MongoDB. I enjoy solving problems and
// // // //             building efficient web solutions focusing on performance and usability.
// // // //           </p>

// // // //           <ul className="about-list">
// // // //             <li><strong>Email:</strong> monikavelan2003@gmail.com</li>
// // // //             <li><strong>Phone:</strong> +91 93455 19385</li>
// // // //             <li><strong>Location:</strong> Chennai, India</li>
// // // //             <li><strong>Current:</strong> Software Engineer at CEITCS</li>
// // // //           </ul>
// // // //         </div>
// // // //       </motion.div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default About;




















// import React from "react";
// import { motion } from "framer-motion";
// import "../styles/about.css";

// const About = () => {
//   return (
//     <section id="about" className="section about">
//       <motion.div
//         className="container split"
//         initial={{ opacity: 0, x: -20 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//       >
//         <div className="left">
//           <img
//             src="/profile.jpg"
//             alt="Monika V"
//             className="profile-pic"
//             onError={(e) => {
//               e.target.onerror = null;
//               e.target.src =
//                 "https://via.placeholder.com/280x320.png?text=Profile+Photo";
//             }}
//           />
//         </div>

//         <div className="right">
//           <h2>About Me</h2>
//           <p>
//             Hi, I'm <strong>Monika V</strong> — a passionate Web Developer experienced in creating
//             responsive and user-friendly web applications. I specialize in front-end and
//             full-stack development using <strong>HTML, CSS, JavaScript, React, Node.js,</strong> and
//             <strong> MongoDB</strong>. My goal is to craft seamless, efficient, and intuitive web
//             experiences that balance aesthetics with functionality. I enjoy problem-solving,
//             continuous learning, and collaborating on innovative projects that push the
//             boundaries of technology.
//           </p>

//           <p>
//             Outside of coding, I love exploring design trends, contributing to open-source
//             communities, and experimenting with creative front-end effects.
//           </p>

//           <ul className="about-list">
//             <li><strong>Email:</strong> monikavelan2003@gmail.com</li>
//             <li><strong>Phone:</strong> +91 93455 19385</li>
//             <li><strong>Location:</strong> Chennai, India</li>      
//           </ul>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default About;












// // import React from "react";
// // import { motion } from "framer-motion";
// // import "../styles/about.css";  // <-- new CSS

// // const About = () => {
// //   return (
// //     <section id="about" className="section about">
// //       <motion.div
// //         className="split"
// //         initial={{ opacity: 0, x: -20 }}
// //         whileInView={{ opacity: 1, x: 0 }}
// //         transition={{ duration: 0.6 }}
// //         viewport={{ once: true }}
// //       >
// //         <div className="left">
// //           <img
// //             src="/profile.jpg"
// //             alt="Monika V"
// //             className="profile-pic"
// //             onError={(e) => {
// //               e.target.onerror = null;
// //               e.target.src =
// //                 "https://via.placeholder.com/280x320.png?text=Profile+Photo";
// //             }}
// //           />
// //         </div>

// //         <div className="right">
// //           <h2>About Me</h2>
// //           <p>
// //             Hi, I'm <strong>Monika V</strong> — a passionate Web Developer experienced in creating
// //             responsive and user-friendly web applications. I specialize in front-end and
// //             full-stack development using <strong>HTML, CSS, JavaScript, React, Node.js,</strong> and
// //             <strong> MongoDB</strong>. My goal is to craft seamless, efficient, and intuitive web
// //             experiences that balance aesthetics with functionality.
// //           </p>

// //           <p>
// //             I enjoy problem-solving, continuous learning, and collaborating on innovative projects
// //             that push the boundaries of technology. I have also contributed to open-source projects
// //             and implemented creative UI effects to enhance user experience.
// //           </p>

// //           <p>
// //             Outside of coding, I love exploring design trends, writing tech blogs, and experimenting
// //             with animation frameworks like Framer Motion and Three.js.
// //           </p>

// //           <ul className="about-list">
// //             <li><strong>Email:</strong> monikavelan2003@gmail.com</li>
// //             <li><strong>Phone:</strong> +91 93455 19385</li>
// //             <li><strong>Location:</strong> Chennai, India</li>      
// //           </ul>
// //         </div>
// //       </motion.div>
// //     </section>
// //   );
// // };

// // export default About;
