import React from "react";
import laptopscreen from "../../assets/categories/laptop-screen.png";
import threeDots from "../../assets/categories/threeDots.png";

function CategoryCard({ isOpen, clickDots }) {
  return (
    <>
      <div className="flex items-center text-[15px] bg-back-color px-2 py-1 max-[352px]:w-40 min-[352px]:w-52 sm:w-64 justify-between ">
        <div className="flex items-center gap-2">
          <img src={laptopscreen} alt="laptopscreen" className="w-6" />
          <div className="ml-2 text-[15px]">Laptop</div>
        </div>
        <div className="relative cursor-pointer px-2" onClick={clickDots}>
          <img src={threeDots} alt="threeDots" className="w-[3px]" />
          {isOpen && (
            <div
              className="absolute top-0 right-0 w-22 bg-white
       border rounded-bl-3xl rounded-br-3xl rounded-tl-3xl
       shadow-lg py-1 z-10 mr-4 overflow-hidden"
            >
              <p className="cursor-pointer px-4 py-1 hover:bg-gray-200">Edit</p>
              <p className="cursor-pointer px-4 py-1 hover:bg-gray-200">
                Delete
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CategoryCard;
