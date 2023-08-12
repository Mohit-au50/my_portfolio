import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import MenuOpen from "../assets/MenuOpen";
import MenuClose from "../assets/MenuClose";

// menu variant
const menuAnimation = {
  hidden: { x: "100%" },
  show: { x: 0, transition: { ease: [0.5, 0.01, -0.05, 0.9] } },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuClose = () => {
    setOpenMenu(false);
  };

  return (
    <nav className="lg:hidden">
      {/* menu open icon */}
      <div onClick={() => setOpenMenu(true)}>
        <MenuOpen />
      </div>

      {/* menu */}
      <motion.dev
        variants={menuAnimation}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className="bg-white h-screen w-full shadow-2xl max-w-xs absolute top-0 right-0 z-20"
      >
        {/* mene close icon */}
        <div onClick={handleMenuClose} className="absolute top-7 left-7">
          <MenuClose />
        </div>

        {/* navigation links */}
        <ul className="h-full flex flex-col justify-center items-center gap-y-9 font-bold text-3xl">
          <li>
            <Link onClick={handleMenuClose} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={handleMenuClose} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={handleMenuClose} to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link onClick={handleMenuClose} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </motion.dev>
    </nav>
  );
};

export default MobileNav;
