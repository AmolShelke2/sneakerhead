import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [activeNavbar, setactiveNavbar] = useState(true);

  const openNavbarClickHandler = () => {
    setactiveNavbar(!activeNavbar);
  };

  return (
    <div className="w-full bg-black px-12 py-6">
      <nav className="flex flex-col md:flex-row justify-between items-center text-center">
        <div className="flex justify-start">
          <h1 className="text-white text-xl">SneakerHeads</h1>
        </div>
        <AiOutlineMenu
          className="text-white block absolute top-6 right-5 text-2xl cursor-pointer md:hidden"
          onClick={openNavbarClickHandler}
        />
        <div>
          <ul
            className={`${
              activeNavbar
                ? "hidden md:flex md:justify-between items-center text-white"
                : "flex md:flex flex-col h-screen md:h-auto justify-center items-center md:flex-row md:justify-between text-white px-10"
            }`}>
            <li className="mb-6 md:mb-0 md:mr-4">
              <a href="#">Home</a>
            </li>
            <li className="mb-6 md:mb-0 md:mr-4">
              <a href="#">Collection</a>
            </li>
            <li className="mb-6 md:mb-0 md:mr-4">
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
