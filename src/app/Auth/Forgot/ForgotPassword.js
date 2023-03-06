import React, { useContext, useRef } from "react";

import Navbar from "../../../components/Navbar/Navbar";

import { AuthContext } from "../AuthContext";
import Loader from "../../../utils/Loader";

function ForgotPassword() {
  const emailRef = useRef();

  let { loading, sendPasswordReset } = useContext(AuthContext);

  const sendMail = () => {
    const email = emailRef.current.value;
    sendPasswordReset(email);
  };

  return (
    <div className="bg-lightGray h-screen">
      <Navbar />

      <div className="auth-center">
        <div className="bg-lightGray md:bg-white md:shadow-md w-full md:w-[38rem] rounded-2xl md:p-10 p-2">
          <h1 className="text-left text-2xl md:text-3xl w-96 font-semibold">
            Forgot password?
          </h1>
          <p className="text-gray font-light my-2">
            We will send you password reset instructions to your email
          </p>
          {/* details */}
          <div className="my-5">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMail();
              }}
            >
              <input
                ref={emailRef}
                type="text"
                placeholder="Your email"
                className="auth-input"
              />

              <button
                disabled={loading}
                submit={true}
                className="btn-primary w-full mt-5"
              >
                {loading ? <Loader /> : "Reset Password"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
