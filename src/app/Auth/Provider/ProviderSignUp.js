import React from "react";

import Navbar from "../../../components/Navbar/Navbar";

// icons
import { BsArrowRight } from "react-icons/bs";

import { NavLink } from "react-router-dom";

function ProviderSignUp() {
  return (
    <div className="bg-lightGray h-screen">
      <Navbar />
      <div className="text-[#DDDDDD] block md:hidden mt-2">
        <hr />
      </div>
      <div className="auth-center">
        <div className="bg-lightGray md:bg-white md:shadow-md w-full md:w-[38rem] rounded-2xl md:p-10 p-2">
          <h1 className="text-left text-2xl md:text-3xl w-96 font-semibold">
            What's your phone number or email?
          </h1>

          {/* details */}
          <div className="my-5">
            <input
              type="text"
              placeholder="Enter your email or phone number"
              className="auth-input"
            />
            <button className="btn-primary w-full my-5">Continue</button>
            <p className="text-xs font-light text-gray my-5 text-center">
              {" "}
              By proceeding, you consent to get calls, WhatsApp or SMS messages,
              including by automated means, from Handys and its affiliates to
              the number provided.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProviderSignUp;
