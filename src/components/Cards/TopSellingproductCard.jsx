import React from "react";

const TopProductCard = ({ image, title, itemsSold }) => {
  return (
    <div className="max-w-xs rounded-2xl overflow-hidden shadow-lg text-center p-2 bg-back-color w-full">
      <img className="w-full" src={image} alt={title} />
      <div className="px-2 py-2 sm:py-4">
        <div className="mb-2 text-[8px] sm:text-[12px] items-center">
          {title}
        </div>
        <p className="bg-[#029783] text-white rounded text-[8px] sm:text-[12px] items-center">
          {itemsSold} items sold
        </p>
      </div>
    </div>
  );
};

export default TopProductCard;
