import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="flex bg-back-color">
        <Navbar />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
