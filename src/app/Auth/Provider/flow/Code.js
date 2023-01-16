import React, { useState } from "react";

import logo from "../../../../assets/logo/logo.svg";

import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

import { useParams, NavLink } from "react-router-dom";

function Code({ step, setStep }) {
  const { id } = useParams();
  return (
    <div className="bg-lightGray h-screen">
      <NavLink to="/">
        <img className="mt-2 mx-2 w-20 md:w-28" src={logo} alt="logo" />
      </NavLink>

      <div className="auth-center">
        <div className="bg-lightGray md:bg-white md:shadow-md w-full md:w-[38rem] rounded-2xl md:p-10 p-2">
          <h1 className="text-left text-2xl md:text-3xl  font-semibold">
            Enter the 4-digit code sent to <br /> {id}
          </h1>

          {/* details */}
          <div className="my-5">
            <div className="my-10 flex flex-row gap-5  justify-between">
              <input className="digit-input" type="number" />
              <input className="digit-input" type="number" />
              <input className="digit-input" type="number" />
              <input className="digit-input" type="number" />
            </div>
            <NavLink to="/validate-resend">
              <span className="text-sm text-primary cursor-pointer">
                Didn't get code?
              </span>
            </NavLink>

            <div className="flex justify-between mt-5">
              <button className="btn-primary-outline">
                <BsArrowLeft className="mr-2 inline-block" />
                Back{" "}
              </button>
              <button
                onClick={() => setStep(step + 1)}
                className="btn-primary "
              >
                Next <BsArrowRight className="ml-2 inline-block" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Code;
