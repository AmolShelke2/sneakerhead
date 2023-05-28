import React from "react";
import store1 from "../assets/images/store/store-image1.webp";
import store2 from "../assets/images/store/store-image2.webp";
import store3 from "../assets/images/store/store-image3.webp";
import store4 from "../assets/images/store/store-image4.webp";

const Aboout = () => {
  return (
    <div className="px-4 lg:px-12 mx-auto py-4" id="about-us">
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
          <img src={store1} alt="store" />
          <img src={store2} alt="store" />
          <img src={store3} alt="store" />
          <img src={store4} alt="store" />
        </div>
      </div>
    </div>
  );
};

export default Aboout;
