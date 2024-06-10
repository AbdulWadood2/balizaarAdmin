import React from "react";
import greatorThanArrow from "../../assets/icons/greator-than-arrow.png";

function GateCard({ itemQuantity, icon,title }) {
  return (
    <div className="flex justify-between bg-item-color p-1 px-2 sm:p-4 rounded-2xl w-full">
      <div className="flex flex-col gap-4 sm:w-full">
        <div className="text-[10px] sm-1:text-2xl">{title}</div>
        <div className="flex items-center justify-between w-full">
          <img src={icon} alt="products" className="w-8 sm-1:w-10 sm:w-16" />

          <div className="text-[10px] sm-1:text-[20px] md:text-[30px] font-md ml-3">
            {itemQuantity}
          </div>
        </div>
      </div>
      <div>
        <div className="bg-slate-100 p-[5px] rounded">
          <img
            src={greatorThanArrow}
            alt="greatorThanArrow"
            className="w-[4px] sm-2:w-[5px] sm-1:w-[4px]"
          />
        </div>
      </div>
    </div>
  );
}

export default GateCard;
