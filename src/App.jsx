import { useState } from "react";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import HowIThink from "./components/HowIThink";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Hero />
      <HowIThink />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
