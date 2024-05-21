import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import blackLogo from "../../assets/nav/black-logo.png";
// white
import dashboardWhite from "../../assets/nav/white/dashboard.png";
import productWhite from "../../assets/nav/white/productWhite.png";
import settingsWhite from "../../assets/nav/white/settingsWhite.png";
import users_white from "../../assets/nav/white/users_white.png";
import categoryWhite from "../../assets/nav/white/categoryWhite.png";
// green
import categoryGreen from "../../assets/nav/green/categoryGreen.png";
import dashboardGreen from "../../assets/nav/green/dashboardGreen.png";
// logout icon
import logoutIcon from "../../assets/nav/logout.png";

import { Link } from "react-router-dom";

// component
import Logout from "../logout/Logout";

function Navbar() {
  const [logout, setLogout] = useState(false);
  const [currentNav, setCurrentNav] = useState("");
  const location = useLocation();

  // get current navigation
  useEffect(() => {
    setCurrentNav(location.pathname);
  }, [location]);

  const handleLogout = () => {
    setLogout(!logout);
  };

  return (
    <>
      <ul className="fixed h-screen flex flex-col justify-between items-center p-2 bg-[#ffffff] w-[70px]">
        <div className="h-[80%] sm:h-[65%] flex flex-col justify-between items-center">
          <li>
            <img src={blackLogo} alt="logo" className="w-[60px]" />
          </li>
          <Link to="/dashboard">
            <div id="/dashboard">
              {currentNav !== "/dashboard" && (
                <div className="p-2 rounded-lg">
                  <img
                    src={dashboardWhite}
                    alt="dashboard"
                    className="w-[30px]"
                  />
                </div>
              )}
              {currentNav === "/dashboard" && (
                <div className="bg-slate-100 p-2 rounded-lg">
                  <img
                    src={dashboardGreen}
                    alt="dashboard"
                    className="w-[30px]"
                  />
                </div>
              )}
            </div>
          </Link>
          <li>
            <img
              src={productWhite}
              alt="product"
              className="w-[30px] cursor-pointer"
            />
          </li>
          <li>
            <img
              src={users_white}
              alt="users"
              className="w-[30px] cursor-pointer"
            />
          </li>
          <li>
            <img
              src={settingsWhite}
              alt="settings"
              className="w-[30px] cursor-pointer"
            />
          </li>
          <Link to="/category">
            {currentNav === "/category" && (
              <div className="bg-slate-100 p-2 rounded-lg">
                <img
                  src={categoryGreen}
                  alt="category"
                  className="w-[30px] cursor-pointer"
                />
              </div>
            )}
            {currentNav !== "/category" && (
              <div className="p-2 rounded-lg">
                <img
                  src={categoryWhite}
                  alt="category"
                  className="w-[30px] cursor-pointer"
                />
              </div>
            )}
          </Link>
        </div>
        <li onClick={handleLogout}>
          <img src={logoutIcon} alt="logout" className="w-[50px]" />
        </li>
        {logout && <Logout handleLogout={handleLogout} />}
      </ul>
    </>
  );
}

export default Navbar;
