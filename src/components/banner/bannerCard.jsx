// src/components/Card.js

import React from "react";

const Card = ({ image, name, website }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white w-64">
      <img className="w-full" src={image} alt="Product" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          <a
            href={website}
            className="text-teal-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {website}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Card;
