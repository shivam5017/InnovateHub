import React from "react";
import { BrandLogo } from "./BrandLogo";
import GithubBtn from "../(marketing)/_components/button";

const Navbar = () => {
  return (
    <header className="flex py-3 fixed top-0 w-full z-10 bg-background">
      <nav className="flex items-center gap-10 container font-semibold">
        <BrandLogo />
         <GithubBtn />
      </nav>
    </header>
  );
};

export default Navbar;
