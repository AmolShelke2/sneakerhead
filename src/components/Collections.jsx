import React from "react";

import product1 from "../assets/images/product1.png";

const Collections = () => {
  return (
    <div className="px-32">
      <h1 className="text-2xl font-bold mb-2">Collections</h1>
      <div className="grid grid-cols-4 items-center">
        <div className="mb-4">
          <div className="h-[300px] w-[300px] flex items-center px-4 bg-slate-100 rounded-sm mb-4">
            <img src={product1} alt="collection" className=" object-contain" />
          </div>
          <div className="mb-4">
            <h2 className="text-sm font-light">Nike</h2>
            <h3 className="text-md font-semibold uppercase">
              Air jordan 1 Mid Se
            </h3>
            <p className="text-md font-semibold">₹10,000</p>
          </div>
        </div>

        <div className="mb-4">
          <div className="h-[300px] w-[300px] flex items-center px-4 bg-slate-100 rounded-sm mb-4">
            <img src={product1} alt="collection" className=" object-contain" />
          </div>
          <div className="mb-4">
            <h2 className="text-sm font-light">Nike</h2>
            <h3 className="text-md font-semibold uppercase">
              Air jordan 1 Mid Se
            </h3>
            <p className="text-md font-semibold">₹10,000</p>
          </div>
        </div>

        <div className="mb-4">
          <div className="h-[300px] w-[300px] flex items-center px-4 bg-slate-100 rounded-sm mb-4">
            <img src={product1} alt="collection" className=" object-contain" />
          </div>
          <div className="mb-4">
            <h2 className="text-sm font-light">Nike</h2>
            <h3 className="text-md font-semibold uppercase">
              Air jordan 1 Mid Se
            </h3>
            <p className="text-md font-semibold">₹10,000</p>
          </div>
        </div>

        <div className="mb-4">
          <div className="h-[300px] w-[300px] flex items-center px-4 bg-slate-100 rounded-sm mb-4">
            <img src={product1} alt="collection" className=" object-contain" />
          </div>
          <div className="mb-4">
            <h2 className="text-sm font-light">Nike</h2>
            <h3 className="text-md font-semibold uppercase">
              Air jordan 1 Mid Se
            </h3>
            <p className="text-md font-semibold">₹10,000</p>
          </div>
        </div>

        <div className="mb-4">
          <div className="h-[300px] w-[300px] flex items-center px-4 bg-slate-100 rounded-sm mb-4">
            <img src={product1} alt="collection" className=" object-contain" />
          </div>
          <div className="mb-4">
            <h2 className="text-sm font-light">Nike</h2>
            <h3 className="text-md font-semibold uppercase">
              Air jordan 1 Mid Se
            </h3>
            <p className="text-md font-semibold">₹10,000</p>
          </div>
        </div>

        <div className="mb-4">
          <div className="h-[300px] w-[300px] flex items-center px-4 bg-slate-100 rounded-sm mb-4">
            <img src={product1} alt="collection" className=" object-contain" />
          </div>
          <div className="mb-4">
            <h2 className="text-sm font-light">Nike</h2>
            <h3 className="text-md font-semibold uppercase">
              Air jordan 1 Mid Se
            </h3>
            <p className="text-md font-semibold">₹10,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
