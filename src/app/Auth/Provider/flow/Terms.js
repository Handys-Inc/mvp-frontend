import React from "react";

import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

import Navbar from "../../../../components/Navbar/Navbar";
import { NavLink } from "react-router-dom";

function Terms() {
  return (
    <div className="bg-lightGray h-screen">
      <Navbar />
      <div className="text-mute block md:hidden mt-2">
        <hr />
      </div>

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
          <div>
            <hr className="text-gray" />
            <div className="flex justify-between mt-2">
              <p>Agree</p>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-5">
            <button className="btn-primary-outline">
              <BsArrowLeft className="mr-2 inline-block" />
              Back{" "}
            </button>
            <button className="btn-primary ">Finish</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms;
