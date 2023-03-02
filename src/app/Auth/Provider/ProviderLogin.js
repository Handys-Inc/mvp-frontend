import React, { useState, useRef } from "react";

import Navbar from "../../../components/Navbar/Navbar";

import Notify from "../../../components/Notify/Notify";

import SERVICES from "../../../services";

import Loader from "../../../utils/Loader";

// icons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { NavLink } from "react-router-dom";

function ProviderLogin() {
  // password handling
  const [passwordShown, setPasswordShown] = useState(false);

  const emailRef = useRef()
  const passwordRef = useRef()


  const [loading, setLoading] = useState(false)

  const loginWithEmailAndPass = () => {
    // 

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email.length < 4 || password.length < 4) {
      Notify("info", "Please check credentials entered")
    } else {
      setLoading(true)
      SERVICES.login(email, password).then((res) => {
        setLoading(false)
        console.log("res", res)
        Notify("success", "Logged in successfully")
      }).catch((e) => {
        setLoading(false)
        Notify("error", e.response.data)
      })
    }

  }


  return (
    <div className="bg-lightGray h-screen">
      <Navbar variant={true} login={false} />

      <div className="auth-center">
        <div className="bg-lightGray md:bg-white md:shadow-md w-full md:w-[38rem] rounded-2xl md:p-10 p-2">
          <h1 className="text-left text-2xl md:text-3xl w-96 font-semibold">
            Log into your account
          </h1>

          {/* details */}
          <div className="my-5">
            <input
              ref={emailRef}
              type="text"
              placeholder="Enter your email or phone number"
              className="auth-input "
            />

            <div className="relative mt-5 mb-3">
              <span
                className="text-gray absolute cursor-pointer right-4 mt-4 ml-5"
                onClick={() => setPasswordShown(!passwordShown)}
              >
                {passwordShown ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>

              <input
                ref={passwordRef}
                className="auth-input"
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                autoComplete="off"
              />
            </div>

            <NavLink to="/forgot-password">
              <span className="text-sm text-primary cursor-pointer">
                Forgot Password?
              </span>
            </NavLink>
            <button
              onClick={() => loginWithEmailAndPass()}
              disabled={loading}
              className="btn-primary w-full mt-5">{loading ? <Loader /> : "Log In"}</button> </div>
        </div>
      </div>
    </div>
  );
}

export default ProviderLogin;
