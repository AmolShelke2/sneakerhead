import React from "react";

import contactImg from "../assets/images/hero1.png";

const Contact = () => {
  return (
    <div className="max-w-[1340px] lg:mx-auto flex flex-col lg:flex-row sm:h-[100vh] lg:h-[500px] items-center gap-8 m-8">
      <form className="bg-white shadow-md rounded px-8 h-[350px] pt-6 pb-8 mb-4 w-full sm:w-[60%]">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline capitalize"
            id="username"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2 capitalize"
            htmlFor="text">
            drop your message
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="text"
            placeholder="Enter any message"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button">
            contact us
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#">
            Say Hi
          </a>
        </div>
      </form>
      <div>
        <img
          src={contactImg}
          alt=""
          className="w-full sm:w-[100%] object-cover sm:hover:scale-150"
        />
      </div>
    </div>
  );
};

export default Contact;
