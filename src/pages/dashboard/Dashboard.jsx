import React from "react";
import Navbar from "../../components/navbar/Navbar";

function Dashboard() {
  return (
    <>
      <div className="flex bg-back-color">
        <Navbar />
        <div className="flex flex-col justify-center items-center w-full">
          <h1>Dashboard</h1>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
