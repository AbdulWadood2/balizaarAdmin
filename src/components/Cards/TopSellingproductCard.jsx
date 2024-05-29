import React from "react";

const TopProductCard = ({ image, title, itemsSold }) => {
  return (
    <div className="max-w-xs rounded-2xl overflow-hidden shadow-lg text-center p-2 bg-back-color ">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="mb-2 text-[12px]">{title}</div>
        <p className="bg-[#029783] text-base text-white rounded">{itemsSold} items sold</p>
      </div>
    </div>
  );
};

export default TopProductCard;
