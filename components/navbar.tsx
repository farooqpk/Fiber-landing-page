"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { AlignJustify, X } from "lucide-react";

const Navbar = () => {
  const [isClickMenu, setIsClickMenu] = useState(false);

  return (
    <nav className="sticky top-0 py-7 flex px-6 md:px-24 justify-between items-center bg-[#fbfaf4]">
      <h1 className="text-lg font-bold cursor-pointer">Fiber</h1>

      <div className="hidden md:flex gap-12 font-medium">
        <h3 className="cursor-pointer">Community</h3>
        <h3 className="cursor-pointer">Pricing</h3>
        <h3 className="cursor-pointer">Features</h3>
      </div>
      <div className="hidden md:flex gap-6 ">
        <Button variant={"ghost"} className="font-bold ">
          Sign In
        </Button>
        <Button variant={"default"} className="bg-indigo-600">
          Sign Up
        </Button>
      </div>

      <div className="cursor-pointer md:hidden">
        {isClickMenu ? (
          <X onClick={() => setIsClickMenu(false)} />
        ) : (
          <AlignJustify onClick={() => setIsClickMenu(true)} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
