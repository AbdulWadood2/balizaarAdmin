import React from "react";
import greatorThanArrow from "../../assets/icons/greator-than-arrow.png";

function GateCard({ itemQuantity, icon }) {
  return (
    <div className="flex justify-between bg-item-color p-4 rounded-2xl w-full">
      <div className="flex flex-col gap-4 w-[160px]">
        <div>Products</div>
        <div className="flex items-center justify-between w-full">
          <img src={icon} alt="products" className="w-16" />

          <div className="text-3xl font-md">{itemQuantity}</div>
        </div>
      </div>
      <div>
        <div className="bg-slate-100 p-[5px] rounded">
          <img
            src={greatorThanArrow}
            alt="greatorThanArrow"
            className="w-[4px]"
          />
        </div>
      </div>
    </div>
  );
}

export default GateCard;
