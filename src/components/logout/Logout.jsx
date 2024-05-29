import React from "react";
import logoutWarning from "../../assets/logout/logoutWarning.png";

const Logout = ({ handleLogout }) => {
  const ShutDown = () => {
    handleLogout();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="relative flex flex-col items-center w-96 bg-white gap-10 rounded-3xl"
        style={{ padding: "50px 0" }}
      >
        {/* The div for the icon */}
        <div className="absolute top-0 left-0 right-0 bg-white h-[50px] rounded-3xl">
          {/* Half of the icon placed outside */}
          <div className="absolute top-[-25px] left-1/2 transform -translate-x-1/2">
            <img src={logoutWarning} alt="logoutWarning" className="w-16" />
          </div>
        </div>
        {/* The message and buttons */}
        <div className="text-black text-center">
          Are you sure you want to logout?
        </div>
        <div className="flex flex-col w-[70%] gap-4">
          <button
            onClick={ShutDown}
            className="bg-[#029783] text-white px-4 py-2 rounded-lg"
          >
            NO
          </button>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/";
            }}
            className="bg-[#D9D9D9] text-white px-4 py-2 rounded-lg"
          >
            YES
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
