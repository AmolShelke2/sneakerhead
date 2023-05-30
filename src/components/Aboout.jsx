import React from "react";
import store1 from "../assets/images/store/store-image1.webp";
import store2 from "../assets/images/store/store-image2.webp";
import store3 from "../assets/images/store/store-image3.webp";
import store4 from "../assets/images/store/store-image4.webp";

const Aboout = () => {
  return (
    <div className="px-4 lg:px-12 mx-auto py-4 mb-5" id="about-us">
      <h1 className="text-2xl font-bold mb-2">About Us</h1>
      <div className="flex flex-col-reverse sm:flex-row-reverse justify-between items-center gap-8">
        <div>
          <h2 className="text-2xl font-extralight mb-6 shadow-sm">
            What is SneakerHead community?
          </h2>
          <p className="text-md font-light mb-8 w-[90%]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
            commodi unde delectus obcaecati maiores, animi laudantium ratione
            harum odit iure repellendus quasi mollitia molestias eos maxime?
            Tempora eveniet velit omnis.
          </p>
          <a
            href="#"
            className="bg-gray-800 px-12 py-4 rounded-md text-white capitalize md:px-12">
            know more
          </a>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="relative">
            <img src={store1} alt="store" />
            <p className="absolute bottom-4 shadow-sm left-4 text-white text-sm md:text-xl font-bold">
              Delhi
            </p>
          </div>
          <div className="relative">
            <img src={store2} alt="store" />
            <p className="absolute bottom-4 shadow-sm left-4 text-white text-sm md:text-xl font-bold">
              Mumbai
            </p>
          </div>
          <div className="relative">
            <img src={store3} alt="store" />
            <p className="absolute bottom-4 shadow-sm left-4 text-white text-sm md:text-xl font-bold">
              Hyderabad
            </p>
          </div>
          <div className=" relative">
            <img src={store4} alt="store" />
            <p className="absolute bottom-4 shadow-sm left-4 text-white text-sm md:text-xl font-bold">
              Banglore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboout;
