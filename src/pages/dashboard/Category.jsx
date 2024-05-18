import React, { useState } from "react";
import camera from "../../assets/categories/camera.png";
import CategoryCard from "../../components/Category/CategoryCard";

function Category() {
  const [openIndex, setOpenIndex] = useState(null);

  const clickDots = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="flex flex-col">
        <div>
          <div className="font-extrabold p-4 text-2xl">Categories</div>
          <input
            type="text"
            placeholder="Add Category"
            className="p-2 rounded-lg w-96"
          />
          {/* file upload  drop box with image icon */}
          <div className="flex justify-center items-center p-2 rounded-lg mt-2 bg-white w-32 h-24 border-dashed border-2">
            <div className="flex flex-col items-center">
              <div className="text-4xl text-gray-300">
                <img src={camera} alt="camera" className="w-6" />
              </div>
              <div className="text-gray-300">Upload Icon</div>
            </div>
          </div>
          <button className="bg-[#029783] text-white p-2 rounded-lg w-36 mt-2">
            Add
          </button>
        </div>
        <div className="bg-white p-4 mt-4 h-[50%]">
          <div className="font-extrabold px-4">Categories List</div>
          <div className="flex flex-wrap gap-2">
            {[...Array(8)].map((_, index) => (
              <CategoryCard
                key={index}
                isOpen={openIndex === index}
                clickDots={() => clickDots(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
