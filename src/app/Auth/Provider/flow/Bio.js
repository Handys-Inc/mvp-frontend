import React from "react";

import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

import { NavLink } from "react-router-dom";

import logo from "../../../../assets/logo/logo.svg";

function Bio({ step, setStep }) {
  return (
    <div className="bg-lightGray h-screen">
      <NavLink to="/">
        <img className="mt-2 mx-2 w-20 md:w-28" src={logo} alt="logo" />
      </NavLink>

      <div className="auth-center">
        <div className="bg-lightGray md:bg-white md:shadow-md w-full md:w-[38rem] rounded-2xl md:p-10 p-2">
          <h1 className="text-left text-2xl md:text-3xl  font-semibold">
            What's your name
          </h1>

          <div className="mt-5">
            <input
              type="text"
              placeholder="First Name"
              className="auth-input mb-4"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="auth-input "
            />
          </div>
          <div className="flex justify-between mt-5">
            <button className="btn-primary-outline">
              <BsArrowLeft
                onClick={() => setStep(step - 1)}
                className="mr-2 inline-block"
              />
              Back{" "}
            </button>
            <button onClick={() => setStep(step + 1)} className="btn-primary ">
              Next <BsArrowRight className="ml-2 inline-block" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
