import React from "react";
import { Link } from "react-router-dom";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full h-[5rem] lg:h-[7rem] fixed px-9 lg:px-24 flex items-center bg-rose-400">
      <div className="w-full flex lg:flex-row lg:items-center justify-between">
        {/* logo image */}
        <Link to="/">
          {/* <img src="" alt="" /> */}
          <h1 className="text-2xl font-semibold tracking-wide">Mohit.dev</h1>
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Mobile Navigation */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
