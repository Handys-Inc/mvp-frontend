import React, { useContext } from "react";

import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

import { NavLink } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import FlowHeader from "./FlowHeader";
import { AuthContext } from "../../AuthContext";

function Bio() {
  let navigate = useNavigate();

  let { firstName, setFirstName, lastName, setLastName } =
    useContext(AuthContext);

  return (
    <div className="bg-lightGray h-screen">
      <FlowHeader />

      <div className="auth-center">
        <div className="bg-lightGray md:bg-white md:shadow-md w-full md:w-[38rem] rounded-2xl md:p-10 p-2">
          <h1 className="text-left text-2xl md:text-3xl  font-semibold">
            What's your name
          </h1>

          <div className="mt-5">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="auth-input mb-4"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="auth-input "
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
            <NavLink to="/auth/validate?step=4">
              <button
                disabled={firstName.length < 2 || lastName.length < 2}
                className="btn-primary "
              >
                Next <BsArrowRight className="ml-2 inline-block" />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
