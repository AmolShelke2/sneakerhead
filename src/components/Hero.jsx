import React from "react";

import hero from "../assets/images/hero1.png";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse justify-center items-center px-6 h-screen md:flex-row md:justify-between md:px-28">
      <div>
        <h1>Join the sneakerHead community</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          neque sapiente nostrum dolores suscipit ex?
        </p>
        <a href="#">see more</a>
      </div>

      <div className="mb-8 md:mb-0">
        <img src={hero} alt="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
