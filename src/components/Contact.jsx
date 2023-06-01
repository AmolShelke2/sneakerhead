import React from "react";

import FormImage from "../assets/images/InstaFeed/Instagram8.jpg";

const Contact = () => {
  return (
    <div
      className="px-4 lg:px-12 py-4 mb-5 flex flex-col justify-center items-center"
      id="contact">
      <h2 className="text-2xl font-bold mb-2">Contact us</h2>
      <div className="grid grid-cols-2 place-items-start w-[40vw] h-[400px] bg-blue-200">
        <div className="flex flex-col justify-center h-full p-6">
          <form className="flex flex-col items-start">
            <label htmlFor="input">Name</label>
            <input type="text" placeholder="Enter Your Name" />
          </form>
        </div>
        <div>
          <img
            src={FormImage}
            alt=""
            className="h-[400px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
