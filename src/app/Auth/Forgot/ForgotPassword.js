import React, { useState } from "react";

import Navbar from "../../../components/Navbar/Navbar";

// icons

import { NavLink } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="bg-lightGray h-screen">
      <Navbar />
      <div className="text-[#DDDDDD] block md:hidden mt-2">
        <hr />
      </div>
      <div className="auth-center">
        <div className="bg-lightGray md:bg-white md:shadow-md w-full md:w-[38rem] rounded-2xl md:p-10 p-2">
          <h1 className="text-left text-2xl md:text-3xl w-96 font-semibold">
            Forgot password?
          </h1>
          <p className="text-gray font-light my-2">
            We will send you password reset instructions to your email
          </p>
          {/* details */}
          <div className="my-5">
            <input
              type="text"
              placeholder="Your email"
              className="auth-input "
            />

            <NavLink to="/reset-password">
              <button className="btn-primary w-full mt-5">
                Reset Password
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
