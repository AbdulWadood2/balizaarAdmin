import React from "react";

const Card = ({ name, score, profileImage, Emoji }) => {
  return (
    <div className="rounded-lg bg-back-color p-4 w-26 h-24 text-center relative">
      <div className="relative inline-block">
        <img
          src={profileImage}
          alt={`${name}'s profile`}
          className="w-10 h-10 rounded-full mx-auto"
        />
        <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
          <img src={Emoji} alt="Heart eyes emoji" className="w-6 h-6" />
        </div>
      </div>
      <div className="mt-1">
        <h2 className="text-[12px] font-semibold">{name}</h2>
      </div>
      <div className="absolute top-2 right-2 bg-[#029783] text-white rounded px-1 py-1 flex items-center justify-center">
        <span className="font-bold text-[8px]">{score}</span>
      </div>
    </div>
  );
};

export default Card;
