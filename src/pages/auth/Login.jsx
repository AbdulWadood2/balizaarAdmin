import React from "react";
import logo from "../../assets/logo.png";

function Login() {
  return (
    <>
      <div className="h-screen sm:h-full flex flex-col sm:flex-row items-center justify-center bg-back-color">
        <div className="bg-logo-color h-full sm:min-h-screen sm:w-[50%] text-center items-center justify-center flex flex-col">
          <img src={logo} alt="logo" className="w-[150px] sm:w-[300px]" />
          <h1 className="text-white text-2xl sm:text-5xl mb-10">
            PROJECT BALIZAAR
          </h1>
          <p className="w-[97%] sm:w-[59%] text-[10px] sm:text-[15px]">
            Lorem ipsum dolor sit amet. Est omnis assumenda in molestiae
            praesentium quo officia consequatur id soluta quibusdam est
            consequuntur libero qui libero officia qui dolorem internos. Qui
            alias neque eum illum accusantium ut autem ullam aut nostrum quae
            vel omnis quis non quibusdam galisum.
          </p>
        </div>
        <div className="h-full order-first sm:order-last sm:min-h-screen sm:w-[50%] text-center items-center justify-center flex flex-col gap-10 w-full">
          <div className="flex flex-col gap-4 w-full justify-center items-center">
            <input
              type="text"
              placeholder="Email"
              className="w-[50%] px-4 py-2 my-2 rounded-2xl"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-[50%] px-4 py-2 my-2 rounded-2xl"
            />
          </div>
          <button className="bg-[#029783] text-white px-4 py-2 rounded-2xl w-[50%]">
            LOGIN
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
