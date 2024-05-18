import React from "react";
import blackLogo from "../../assets/nav/black-logo.png";
// white
import dashboardWhite from "../../assets/nav/white/dashboard.png";
import productWhite from "../../assets/nav/white/productWhite.png";
import settingsWhite from "../../assets/nav/white/settingsWhite.png";
import users_white from "../../assets/nav/white/users_white.png";
// green
import categoryGreen from "../../assets/nav/green/categoryGreen.png";
// logout icon
import logout from "../../assets/nav/logout.png";

function Navbar() {
  return (
    <>
      <ul className=" h-screen flex flex-col justify-between items-center p-4 bg-[#ffffff]">
        <div className=" h-[80%] sm:h-[65%] flex flex-col justify-between items-center">
          <li>
            <img
              src={blackLogo}
              alt="logo"
              className="w-[60px]"
            />
          </li>
          <li>
            <img src={dashboardWhite} alt="dashboard" className="w-[30px]" />
          </li>
          <li>
            <img src={productWhite} alt="product" className="w-[30px]" />
          </li>
          <li>
            <img src={users_white} alt="users" className="w-[30px]" />
          </li>
          <li>
            <img src={settingsWhite} alt="settings" className="w-[30px]" />
          </li>
          <li>
            <img src={categoryGreen} alt="category" className="w-[30px]" />
          </li>
        </div>
        <li>
          <img src={logout} alt="logout" className="w-[50px]" />
        </li>
      </ul>
    </>
  );
}

export default Navbar;
