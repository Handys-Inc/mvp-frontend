import React, { useContext, useState } from "react";

import { BsArrowLeft } from "react-icons/bs";

import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import FlowHeader from "./FlowHeader";

import Loader from "../../../../utils/Loader";

import { AuthContext } from "../../AuthContext";

function Terms() {
  let navigate = useNavigate();

  let { signUp, loading } = useContext(AuthContext);

  const [checked, setChecked] = useState(false);

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
            .I am at least 18 years of age.
          </p>
          <div className="my-5">
            <hr className="text-gray" />
            <div className="flex justify-between my-5">
              <p>Agree</p>
              <div>
                <input
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                  type="checkbox"
                />
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

            <button
              onClick={() => signUp()}
              disabled={!checked || loading}
              className="btn-primary "
            >
              {loading ? <Loader /> : "Finish"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms;
