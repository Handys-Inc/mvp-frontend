import React from "react";

import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import FlowHeader from "./FlowHeader";

function Terms() {
  let navigate = useNavigate();
  return (
    <div className="bg-lightGray h-screen">
      <FlowHeader />

      <div className="auth-center">
        <div className="bg-lightGray md:bg-white md:shadow-md w-full md:w-[38rem] rounded-2xl md:p-10 p-2">
          <h1 className="text-left text-2xl md:text-3xl  font-semibold">
            Accept Handys’ Terms & Review privacy notice
          </h1>
          <p className="font-light mt-3 mb-5 text-base">
            By selecting "I Agree" below, I have reviewed and agree to the{" "}
            <NavLink to="/terms-of-use">
              <span className="text-primary font-bold">Terms of Use </span>
            </NavLink>{" "}
            and acknowledge the{" "}
            <NavLink to="/privacy-notice">
              <span className="text-primary font-bold">Privacy Notice</span>{" "}
            </NavLink>
            . I am at least 18 years of age.
          </p>
          <div className="my-5">
            <hr className="text-gray" />
            <div className="flex justify-between my-5">
              <p>Agree</p>
              <div>
                <input type="checkbox" />
              </div>
            </div>
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
              <button className="btn-primary ">Finish</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms;
