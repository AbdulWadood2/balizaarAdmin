import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import blackLogo from "../../assets/nav/black-logo.png";
import dashboardWhite from "../../assets/nav/white/dashboard.png";
import productWhite from "../../assets/nav/white/productWhite.png";
import productGreen from "../../assets/nav/green/productGreen.png";
import settingsWhite from "../../assets/nav/white/settingsWhite.png";
import users_white from "../../assets/nav/white/users_white.png";
import usersGreen from "../../assets/nav/green/usersGreen.png";
import categoryWhite from "../../assets/nav/white/categoryWhite.png";
import categoryGreen from "../../assets/nav/green/categoryGreen.png";
import dashboardGreen from "../../assets/nav/green/dashboardGreen.png";
import logoutIcon from "../../assets/nav/logout.png";
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
      <ul className="fixed h-screen flex flex-col sm:justify-between items-center p-2 bg-[#ffffff] w-[60px] z-[1000]">
        <div className="h-[80%] gap-6 sm:h-[65%] flex flex-col sm:justify-between items-center">
          <li className="mb-4">
            <img src={blackLogo} alt="logo" className="w-[60px]" />
          </li>
          <Link to="/dashboard/main">
            <div id="/dashboard/main">
              {currentNav !== "/dashboard/main" &&
                currentNav !== "/dashboard/allBanners" && (
                  <div className="p-2 rounded-lg">
                    <img
                      src={dashboardWhite}
                      alt="dashboard"
                      className="w-[30px]"
                    />
                  </div>
                )}
              {(currentNav === "/dashboard/main" ||
                currentNav === "/dashboard/allBanners") && (
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
          <Link to="/allProducts">
            {currentNav === "/allProducts" && (
              <li className="bg-slate-100 p-2 rounded-lg">
                <img
                  src={productGreen}
                  alt="product"
                  className="w-[30px] cursor-pointer"
                />
              </li>
            )}
            {currentNav !== "/allProducts" && (
              <li>
                <img
                  src={productWhite}
                  alt="product"
                  className="w-[30px] cursor-pointer"
                />
              </li>
            )}
          </Link>
          <Link to="/users">
            {currentNav !== "/users" && (
              <li>
                <img
                  src={users_white}
                  alt="users"
                  className="w-[30px] cursor-pointer"
                />
              </li>)}
            {currentNav === "/users" && (
              <li>
                <img
                  src={usersGreen}
                  alt="users"
                  className="w-[30px] cursor-pointer"
                />
              </li>
            )}
          </Link>
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
          <li onClick={handleLogout} className="block sm:hidden">
            <img src={logoutIcon} alt="logout" className="w-[50px]" />
          </li>
        </div>
        <li onClick={handleLogout} className="hidden sm:block">
          <img src={logoutIcon} alt="logout" className="w-[50px]" />
        </li>
      </ul>
      {logout && <Logout handleLogout={handleLogout} />}
    </>
  );
}

export default Navbar;
