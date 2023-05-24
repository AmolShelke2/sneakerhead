import React from "react";

import hero from "../assets/images/hero1.png";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse justify-center items-center px-4 h-[80vh] md:flex-row md:justify-between md:px-28">
      <div>
        <h1 className="text-xl font-bold mb-4">
          Join the sneakerHead community
        </h1>
        <p className=" font-light text-sm mb-8 md:w-[75%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          neque sapiente nostrum dolores suscipit ex?
        </p>
        <a
          href="#"
          className="bg-black px-8 py-4 rounded-md text-white capitalize mt-2">
          see more
        </a>
      </div>

      <div className="mb-8 md:mb-0">
        <img src={hero} alt="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
