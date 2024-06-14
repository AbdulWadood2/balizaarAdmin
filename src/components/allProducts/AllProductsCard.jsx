import React from "react";

const ItemCard = ({ image, title, location, description, rating }) => {
  return (
    <div className="max-w-xs rounded-2xl overflow-hidden pt-2 px-1 bg-back-color">
      <img className="w-full rounded-t-xl" src={image} alt={title} />
      <div className="px-1 py-2">
        <div className="flex justify-between">
          <h2 className="font-bold text-[16px] sm:text-xl mb-2">{title}</h2>
          <span className="text-lg font-bold text-gray-500">{rating}</span>
        </div>
        <p className="text-gray-500 items-center ml-[20%] text-[14px] sm:text-sm">{location}</p>
        <div className="flex justify-between items-center mt-2">
          <p className="text-[12px] sm:text-sm text-gray-700  line-clamp-3">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
