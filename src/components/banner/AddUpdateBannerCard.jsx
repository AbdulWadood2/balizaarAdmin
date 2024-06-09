import React from "react";
// assets
import less_than_arrow from "../../assets/arrows/less_than_arrow.png";
import file_banner from "../../assets/docs/file_banner.png";

function AddUpdateBannerCard({ title, buttonTitle, setShowModel }) {
  return (
    <div className="flex flex-col bg-white p-6 rounded-2xl w-[90%] sm:w-1/2 justify-center">
      <div className="flex items-center gap-4 mb-2">
        <div className="bg-slate-100 p-2 rounded">
          <img
            src={less_than_arrow}
            alt="less than arrow"
            className="w-[4px]"
            onClick={() => setShowModel(false)}
          />
        </div>
        <div className="text-[14px]">{title}</div>
      </div>
      <div className="flex flex-col p-6 gap-4">
        <div className="border-[1px] border-black rounded-xl h-48  flex justify-center items-center">
          <div className="flex flex-col items-center gap-4">
            <img src={file_banner} alt="file banner" className="w-6" />
            <div className="text-center text-[14px] text-slate-300 ">
              Upload Document
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div>Name</div>
          <div>
            <input
              type="text"
              className="border p-1 border-black w-full rounded-xl"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div>Website</div>
          <div>
            <input
              type="text"
              className="border p-1 border-black w-full rounded-xl"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="px-0 sm:px-4 py-[6px] text-white rounded-xl bg-ui-color w-1/2 text-[13px] sm:text-[17px]"
            onClick={() => setShowModel(false)}
          >
            {buttonTitle}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddUpdateBannerCard;
