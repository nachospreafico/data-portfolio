import { useState } from "react";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import HowIThink from "./components/HowIThink";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <>
      <Hero />
      <HowIThink />
      <Experience />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
