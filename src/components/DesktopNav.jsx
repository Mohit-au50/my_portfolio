import React from "react";
import { Link } from "react-router-dom";

const DesktopNav = () => {
  return (
    <nav className="hidden lg:flex gap-x-12 font-semibold">
      <Link to="/" className="text-gray-500 hover:text-gray-800 transition">
        Home
      </Link>
      <Link
        to="/about"
        className="text-gray-500 hover:text-gray-800 transition"
      >
        About
      </Link>
      <Link
        to="/projects"
        className="text-gray-500 hover:text-gray-800 transition"
      >
        Projects
      </Link>
      <Link
        to="/contact"
        className="text-gray-500 hover:text-gray-800 transition"
      >
        Contact
      </Link>
    </nav>
  );
};

export default DesktopNav;
