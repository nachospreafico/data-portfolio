import { useState } from "react";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Contact />
      {/* Footer note */}
      <p className="m-2 text-xs text-center text-slate-500 ">
        © {new Date().getFullYear()}{" "}
        <a
          href="https://www.linkedin.com/in/ignacio-spreafico"
          className="text-blue-600 hover:underline"
          target="_blank"
        >
          Ignacio Spreafico
        </a>
      </p>
    </>
  );
}

export default App;
