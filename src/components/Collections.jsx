import React from "react";

import product1 from "../assets/images/product1.png";
import product2 from "../assets/images/product2.png";
import product3 from "../assets/images/product3.png";
import product4 from "../assets/images/product4.png";
import product5 from "../assets/images/product5.png";
import product6 from "../assets/images/product6.png";
import product7 from "../assets/images/product7.png";
import product8 from "../assets/images/product8.png";
import product9 from "../assets/images/product9.png";
import product10 from "../assets/images/product10.png";
import product11 from "../assets/images/product11.png";
import product12 from "../assets/images/product12.png";

const collectionsData = [
  {
    shoeName: "Nike Air Max 90",
    shoeImage: product1,
    shoePrice: "9,299",
    shoeBrandName: "Nike",
  },
  {
    shoeName: "Nike Ultraboost",
    shoeImage: product2,
    shoePrice: "10,499",
    shoeBrandName: "Nike",
  },
  {
    shoeName: "Nike Pegasus",
    shoeImage: product3,
    shoePrice: "6,299",
    shoeBrandName: "Nike",
  },
  {
    shoeName: "Nike Free Run",
    shoeImage: product4,
    shoePrice: "13,499",
    shoeBrandName: "Nike",
  },
  {
    shoeName: "Nike Air Force 1",
    shoeImage: product5,
    shoePrice: "5,699",
    shoeBrandName: "Nike",
  },
  {
    shoeName: "Nike Zoom Fly",
    shoeImage: product6,
    shoePrice: "8,999",
    shoeBrandName: "Nike",
  },
  {
    shoeName: "Nike Cortez",
    shoeImage: product7,
    shoePrice: "4,499",
    shoeBrandName: "Nike",
  },
  {
    shoeName: "Nike Dunk Low",
    shoeImage: product8,
    shoePrice: "5,299",
    shoeBrandName: "Nike",
  },
  {
    shoeName: "Nike React Infinity Run",
    shoeImage: product9,
    shoePrice: "12,199",
    shoeBrandName: "Nike",
  },
  {
    shoeName: "Nike Air Zoom Structure",
    shoeImage: product10,
    shoePrice: "9,299",
    shoeBrandName: "Nike",
  },
  {
    shoeName: "Nike Air Max 270",
    shoeImage: product11,
    shoePrice: "8,999",
    shoeBrandName: "Nike",
  },
  {
    shoeName: "Nike Joyride Run",
    shoeImage: product12,
    shoePrice: "10,999",
    shoeBrandName: "Nike",
  },
];

const Collections = () => {
  return (
    <div className="px-4 lg:px-12 mx-auto mb-4" id="collections">
      <h1 className="text-2xl font-bold mb-2">Collections</h1>
      <div className="grid grid-cols-1 place-items-center xl:place-items-start md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {collectionsData.map((collection) => (
          <div className="mb-4">
            <div className="h-[300px] w-[300px] flex items-center px-4 bg-slate-100 rounded-sm mb-4">
              <img
                src={collection.shoeImage}
                alt="collection"
                className=" object-contain"
              />
            </div>
            <div className="mb-4">
              <h2 className="text-sm font-light">{collection.shoeBrandName}</h2>
              <h3 className="text-md font-semibold uppercase">
                {collection.shoeName}{" "}
              </h3>
              <p className="text-md font-semibold">₹{collection.shoePrice}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
