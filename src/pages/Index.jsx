import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="flex bg-back-color w-full">
        <Navbar />
        <div
          className="ml-[60px] p-4 min-h-screen"
          style={{ width: "calc(100% - 60px)" }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
