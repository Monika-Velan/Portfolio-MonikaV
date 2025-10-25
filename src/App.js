import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./styles/app.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Home />
        {/* <About /> */}
        <Experience />
        <Projects />
        <Education/>
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} Monika V — Built with React
      </footer>
    </div>
  );
}

export default App;
