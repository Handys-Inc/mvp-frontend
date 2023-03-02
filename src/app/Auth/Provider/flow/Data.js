import React from "react";

import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import FlowHeader from "./FlowHeader";

import { useNavigate } from "react-router-dom";

import { NavLink } from "react-router-dom";

function Data({ step, setStep }) {
  let navigate = useNavigate();
  return (
    <div className="bg-lightGray h-screen">
      <FlowHeader />
      <div className="auth-center">
        <div className="bg-lightGray md:bg-white md:shadow-md w-full md:w-[38rem] rounded-2xl md:p-10 p-2">
          <h1 className="text-left text-2xl md:text-3xl  font-semibold">
            Enter your email address
          </h1>

          <div className="mt-5">
            {" "}
            <input
              type="email"
              placeholder="Enter your email address"
              className="auth-input mb-4"
            />
          </div>
          <div className="flex justify-between mt-5">
            <button
              onClick={() => navigate(-1)}
              className="btn-primary-outline"
            >
              <BsArrowLeft className="mr-2 inline-block" />
              Back{" "}
            </button>
            <NavLink to="/auth/provider/validate?step=4">
              <button className="btn-primary ">
                Next <BsArrowRight className="ml-2 inline-block" />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
