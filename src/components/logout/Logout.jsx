import React from "react";
import logoutWarning from "../../assets/logout/logoutWarning.png";

const Logout = ({ handleLogout }) => {
  const ShutDown = () => {
    handleLogout();
  };
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
      className="w-full h-screen m-auto"
    >
      <div
        className="flex flex-col items-center w-96 bg-white gap-10 rounded-3xl relative"
        style={{ padding: "50px 0" }} // Added padding to accommodate the icon
      >
        {/* The div for the icon */}
        <div
          className="absolute top-0 left-0 right-0 bg-white h-[50px] rounded-3xl"
          style={{ zIndex: 1 }} // Ensure the icon is above the background
        >
          {/* Half of the icon placed outside */}
          <div
            style={{
              position: "absolute",
              top: "-25px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <img
              src={logoutWarning}
              alt="logoutWarning"
              className="text-[50px] text-red-600 w-16"
            />
          </div>
        </div>
        {/* The message and buttons */}
        <div className="text-black">Are you sure you want to logout?</div>{" "}
        {/* Ensuring text visibility */}
        <div className="flex flex-col w-[70%] gap-4">
          <button
            onClick={ShutDown}
            className="bg-[#029783] text-white px-4 py-2 rounded-lg"
          >
            N0
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
