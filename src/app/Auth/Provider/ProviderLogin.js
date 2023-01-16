import React, { useState } from "react";

import Navbar from "../../../components/Navbar/Navbar";

// icons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { NavLink } from "react-router-dom";

function ProviderLogin() {
  // password handling
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <div className="bg-lightGray h-screen">
      <Navbar variant={true} login={false} />

      <div className="auth-center">
        <div className="bg-lightGray md:bg-white md:shadow-md w-full md:w-[38rem] rounded-2xl md:p-10 p-2">
          <h1 className="text-left text-2xl md:text-3xl w-96 font-semibold">
            Log into your account
          </h1>

          {/* details */}
          <div className="my-5">
            <input
              type="text"
              placeholder="Enter your email or phone number"
              className="auth-input "
            />

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

            <NavLink to="/forgot-password">
              <span className="text-sm text-primary cursor-pointer">
                Forgot Password?
              </span>
            </NavLink>
            <button className="btn-primary w-full mt-5">Log In</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProviderLogin;
