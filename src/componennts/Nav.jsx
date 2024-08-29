import React, { useState } from "react";
import logo  from '../images/logo.png'
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/16/solid";

const Nav = () => {
  const Links = [
    { name: "ABout", link: "/" },
    { name: "Contact", link: "/" },
    { name: "Services", link: "/" },
  ];

  const [isOpen , setIsOpen] = useState(false)

  const toggleNabar = () => {
    setIsOpen(!isOpen)
  }

  return <div>
    <nav className="flex justify-between p-4">
        <div className="nav-logo">
            <img src={logo} className="h-5" alt="" />
        </div>
        <ul className="hidden md:flex gap-4 ">
            {
                Links.map((link)=> (
                    <li>
                        <a href={link.link}>{link.name}</a>
                    </li>
    
                ))
            }
        </ul>
        <button onClick={toggleNabar} className="md:hidden">
            {isOpen ? <XMarkIcon className="h-4"/> : <Bars3BottomLeftIcon className="h-4"/>}
        </button>
        <button className="hidden md:flex">contact us</button>
    </nav>
    {isOpen && (
        <div className="flex-wrap items-center">
            {
                Links.map((link)=> (
                    <li>
                        <a href={link.link}>{link.name}</a>
                    </li>
    
                ))
            }
        </div>

    )}
  </div>;
};

export default Nav;
