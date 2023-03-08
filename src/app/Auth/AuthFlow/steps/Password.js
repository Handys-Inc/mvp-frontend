import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import { NavLink } from "react-router-dom";

import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

import Loader from "../../../../utils/Loader";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import FlowHeader from "./FlowHeader";
import { AuthContext } from "../../AuthContext";

function Password({ step, setStep }) {
  let navigate = useNavigate();

  let { password, setPassword, userAccess, signUp, loading } =
    useContext(AuthContext);

  // password handling
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <div className="bg-lightGray h-screen">
      <FlowHeader />
      <div className="auth-center">
        <div className="bg-lightGray md:bg-white md:shadow-md w-full md:w-[38rem] rounded-2xl md:p-10 p-2">
          <h1 className="text-left text-2xl md:text-3xl  font-semibold">
            Create your account password
          </h1>
          <p className="font-light mt-3 mb-5 text-sm">
            Your password should be at least 8 characters long and contain at
            least one digit and one special character
          </p>
          <div className="relative mt-5 mb-3">
            <span
              className="text-gray absolute cursor-pointer right-4 mt-4 ml-5"
              onClick={() => setPasswordShown(!passwordShown)}
            >
              {passwordShown ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>

            <input
              className="auth-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={passwordShown ? "text" : "password"}
              placeholder="Create your password"
              autoComplete="off"
            />
          </div>
          <div className="flex justify-between mt-5">
            <button className="btn-primary-outline">
              <BsArrowLeft
                onClick={() => navigate(-1)}
                className="mr-2 inline-block"
              />
              Back{" "}
            </button>

            {userAccess === "service" ? (
              // PROVIDER
              <NavLink to="/auth/validate?step=5">
                <button disabled={password.length < 8} className="btn-primary ">
                  Next <BsArrowRight className="ml-2 inline-block" />
                </button>
              </NavLink>
            ) : (
              // CUSTOMER

              <button
                onClick={() => signUp()}
                disabled={password.length < 8 || loading}
                className="btn-primary "
              >
                {loading? <Loader/> : "Finish"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Password;
