import React, { useState } from "react";

const Navbar = () => {
  const [activeNavbar, setactiveNavbar] = useState(false);

  return (
    <div className="w-full bg-black px-12 py-6">
      <nav className="flex flex-col md:flex-row justify-between items-center text-center">
        <div className="flex justify-start">
          <h1 className="text-white text-xl">SneakerHeads</h1>
        </div>
        <div>
          <ul className="flex flex-col h-screen md:h-auto justify-center items-center md:flex-row md:justify-between text-white">
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
