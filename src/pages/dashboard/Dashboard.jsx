import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="flex bg-back-color">
        <Navbar />
        <div className="ml-[71px] p-4 h-screen">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
