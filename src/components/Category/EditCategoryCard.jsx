import React from "react";
import Camera from "../../assets/categories/camera.png";

function EditCategoryCard({ onClick }) {
  return (
    <>
      <div className="bg-white w-[300px] h-[300px] p-4 rounded-2xl">
        <h1 className="font-bold text-2xl mb-4">Edit Category</h1>
        <div>
          <input
            type="text"
            placeholder="Add Category"
            className="p-2 rounded-lg w-full bg-back-color"
          />
          {/* file upload  drop box with image icon */}
          <div className="flex justify-center items-center p-2 rounded-lg mt-2 bg-back-color w-32 h-24 border-dashed border-2">
            <div className="flex flex-col items-center">
              <div className="text-4xl text-gray-300">
                <img src={Camera} alt="camera" className="w-6" />
              </div>
              <div className="text-gray-300">Upload Icon</div>
            </div>
          </div>
          <button
            className="bg-[#029783] text-white p-2 rounded-lg w-36 mt-2"
            onClick={onClick}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
}

export default EditCategoryCard;
