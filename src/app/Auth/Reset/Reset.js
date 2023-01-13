import React, { useState } from "react";

import Navbar from "../../../components/Navbar/Navbar";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function Reset() {
  // password handling
  const [passwordShown, setPasswordShown] = useState(false);
  return (
    <div className="bg-lightGray h-screen">
      <Navbar />
      <div className="text-[#DDDDDD] block md:hidden mt-2">
        <hr />
      </div>
      <div className="auth-center">
        <div className="bg-lightGray md:bg-white md:shadow-md w-full md:w-[38rem] rounded-2xl md:p-10 p-2">
          <h1 className="text-left text-2xl md:text-3xl w-96 font-semibold">
            Set New Password
          </h1>

          {/* details */}
          <div className="my-5">
            <div className="relative mt-5 mb-3">
              <span
                className="text-gray absolute cursor-pointer right-4 mt-4 ml-5"
                onClick={() => setPasswordShown(!passwordShown)}
              >
                {passwordShown ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>

              <input
                className="auth-input"
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                autoComplete="off"
              />
            </div>
            <div className="relative mt-5 mb-3">
              <span
                className="text-gray absolute cursor-pointer right-4 mt-4 ml-5"
                onClick={() => setPasswordShown(!passwordShown)}
              >
                {passwordShown ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>

              <input
                className="auth-input"
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                autoComplete="off"
              />
            </div>
            <button className="btn-primary w-full mt-5">Reset Password</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reset;
