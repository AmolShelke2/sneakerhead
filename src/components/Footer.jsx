import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col w-full px-4 py-10 bg-black text-white md:flex-row-reverse md:justify-between items-center">
      <div>
        <ul className="flex justify-between">
          <li className="mr-2">
            <a href="#" className="md:text-xl">
              contact
            </a>
          </li>
          <li className="mr-2">
            <a href="#" className="md:text-xl">
              more info
            </a>
          </li>
          <li className="mr-2">
            <a href="#" className="md:text-xl">
              visit us
            </a>
          </li>
          <li>
            <a href="#" className="md:text-xl">
              shop
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p className="mt-4 md:m-0 md:text-lg text-center">
          All copyrights reserved by{" "}
          <a href="https://github.com/AmolShelke2" className="text-cyan-400">
            Amol Shelke💙
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
