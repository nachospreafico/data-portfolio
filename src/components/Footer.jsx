import React from "react";

const Footer = () => {
  return (
    <p className="text-xs text-center text-slate-500 bg-slate-50">
      © {new Date().getFullYear()}{" "}
      <a
        href="https://www.linkedin.com/in/ignacio-spreafico"
        className="text-blue-600 hover:underline"
        target="_blank"
      >
        Ignacio Spreafico
      </a>
    </p>
  );
};

export default Footer;
