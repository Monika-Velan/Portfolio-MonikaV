// import React, { useState } from "react";
// import { Link as ScrollLink } from "react-scroll";
// import { FaBars, FaTimes } from "react-icons/fa";
// import "../styles/navbar.css";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const toggle = () => setOpen(!open);

//   const items = [
//     { to: "home", label: "Home" },
//     { to: "experience", label: "Experience" },
//     { to: "projects", label: "Projects" },
//     { to:  "Education", label: "Education"},
//     { to: "skills", label: "Skills" },
//     { to: "contact", label: "Contact" }
//   ];

//   return (
//     <nav className="nav">
//       <div className="nav-left">
//         <a href="/" className="logo">Monika V</a>
//       </div>

//       <div className={`nav-links ${open ? "open" : ""}`}>
//         {items.map(i => (
//           <ScrollLink
//             key={i.to}
//             to={i.to}
//             smooth={true}
//             duration={500}
//             offset={-70}
//             className="nav-link"
//             onClick={() => setOpen(false)}
//           >
//             {i.label}
//           </ScrollLink>
//         ))}
//       </div>

//       <button className="nav-toggle" onClick={toggle}>
//         {open ? <FaTimes /> : <FaBars />}
//       </button>
//     </nav>
//   );
// };

// export default Navbar;























import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const items = [
    { to: "home", label: "Home" },
    { to: "experience", label: "Experience" },
    { to: "projects", label: "Projects" },
    { to: "education", label: "Education" }, // ✅ fixed lowercase
    { to: "skills", label: "Skills" },       // ✅ already correct
    { to: "contact", label: "Contact" }
  ];

  return (
    <nav className="nav">
      <div className="nav-left">
        <a href="/" className="logo">Monika V</a>
      </div>

      <div className={`nav-links ${open ? "open" : ""}`}>
        {items.map((i) => (
          <ScrollLink
            key={i.to}
            to={i.to}
            smooth={true}
            duration={500}
            offset={-80} // ✅ makes scrolling align perfectly under navbar
            spy={true}   // ✅ highlights active section (optional)
            activeClass="active"
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            {i.label}
          </ScrollLink>
        ))}
      </div>

      <button className="nav-toggle" onClick={toggle}>
        {open ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
