import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import {
  Bars3BottomLeftIcon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNabar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="flex justify-between py-4 px-6 border rounded-full bg-[#F2F4F7] items-center">
        <div className="nav-logo">
          <img src={logo} className="h-6" alt="logo" />
        </div>
        <ul className="hidden md:flex gap-10 items-center text-[#667085] font-medium">
          <Link to="./product" className="flex gap-1 items-center">
            Products <ChevronDownIcon className="h-4" />
          </Link>
          <Link to="./solutions" className="flex gap-1 items-center">
            Solutions <ChevronDownIcon className="h-4" />
          </Link>
          <Link to="./resources" className="flex gap-1 items-center">
            Resources <ChevronDownIcon className="h-4" />
          </Link>
          <Link to="./pricing">Pricing </Link>
        </ul>

        <div className="gap-1 md:flex hidden">
          <button className="border rounded-full px-4 py-2 text-black text-xs font-medium bg-white border-gray-300">
            Talk to sales
          </button>
          <button className="border rounded-full px-4 py-2 text-white text-xs bg-[#175CD3]">
            Sign up for free
          </button>
        </div>
        <button className="md:hidden" onClick={toggleNabar}>
          {isOpen ? (
            <XMarkIcon className="h-6 text-blue-900" />
          ) : (
            <Bars3BottomLeftIcon className="h-6 text-blue-900" />
          )}
        </button>
      </nav>
      {isOpen && (
        <div className="flex flex-wrap p-2 flex-col items-center gap-2 bg-[#F2F4F7] text-[#667085] font-medium">
          <Link to="./product">Products</Link>
          <Link to="./solutions">Solutions</Link>
          <Link to="./resources">Resources</Link>
          <Link to="./pricing">Pricing </Link>
          <button className="border rounded-full px-4  py-2 text-black text-xs font-medium bg-white border-gray-300">
            Talk to sales
          </button>
          <button className="border rounded-full px-4 py-2 text-white text-xs bg-[#175CD3]">
            Sign up for free
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
