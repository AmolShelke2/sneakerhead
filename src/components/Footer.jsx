import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col w-full px-4 py-10 bg-black text-white md:flex-row-reverse md:justify-between items-center">
      <div>
        <ul className="flex justify-between">
          <li className="mr-2">
            <a href="#">contact</a>
          </li>
          <li className="mr-2">
            <a href="#">more info</a>
          </li>
          <li className="mr-2">
            <a href="#">visit us</a>
          </li>
          <li>
            <a href="#">shop</a>
          </li>
        </ul>
      </div>
      <div>
        <p className="mt-4 md:m-0 text-center">
          All copyrights reserved by <span>Amol Shelke</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
