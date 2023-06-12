import React from "react";

import Instagram1 from "../assets/images/InstaFeed/Instagram1.jpg";
import Instagram2 from "../assets/images/InstaFeed/Instagram2.jpg";
import Instagram3 from "../assets/images/InstaFeed/Instagram3.jpg";
import Instagram4 from "../assets/images/InstaFeed/Instagram4.jpg";
import Instagram5 from "../assets/images/InstaFeed/Instagram5.jpg";
import Instagram6 from "../assets/images/InstaFeed/Instagram6.jpg";
import Instagram7 from "../assets/images/InstaFeed/Instagram7.jpg";
import Instagram8 from "../assets/images/InstaFeed/Instagram8.jpg";
import Instagram9 from "../assets/images/InstaFeed/Instagram9.jpg";

const InstaFeedData = [
  {
    image: Instagram1,
  },
  {
    image: Instagram2,
  },
  {
    image: Instagram3,
  },
  {
    image: Instagram4,
  },
  {
    image: Instagram5,
  },
  {
    image: Instagram6,
  },
  {
    image: Instagram7,
  },
  {
    image: Instagram8,
  },
  {
    image: Instagram9,
  },
];

const InstaFeed = () => {
  return (
    <div className="px-4 lg:px-12 mx-auto py-4 mb-5" id="InstaFeed">
      <h2 className="text-2xl font-bold mb-2">Our Instagram</h2>
      <div className="grid grid-cols-2 md:grid-cols-3">
        {InstaFeedData.map((instafeed) => (
          <div className="m-1 shadow-sm shadow-black transition-all">
            <img
              src={instafeed.image}
              alt="instafeed"
              className="object-cover h-full w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstaFeed;
