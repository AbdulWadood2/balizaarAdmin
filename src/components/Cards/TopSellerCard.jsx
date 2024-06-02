import React from "react";

const Card = ({ name, score, profileImage, Emoji }) => {
  return (
    <div className="rounded-lg bg-white  text-center relative">
      <div className="bg-back-color p-2 rounded-lg">
        <div className="relative inline-block">
          <img
            src={profileImage}
            alt={`${name}'s profile`}
            className="w-6 h-6 sm:w-10 sm:h-10 rounded-full mx-auto"
          />
          <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
            <img
              src={Emoji}
              alt="Heart eyes emoji"
              className="w-3 h-3 sm:w-6 sm:h-6"
            />
          </div>
        </div>
        <div className="mt-1">
          <h2 className="text-[8px] sm:text-[12px] font-semibold text-nowrap truncate">
            {name}
          </h2>
        </div>
        <div className="absolute top-2 right-2 bg-[#029783] text-white rounded p-[3px] sm:px-1 sm:py-1 flex items-center justify-center">
          <span className="font-bold text-[4px] sm:text-[8px]">{score}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
