import React, { useState, useContext } from "react";

import Navbar from "../../../components/Navbar/Navbar";

import { AuthContext } from "../AuthContext";

import Loader from "../../../utils/Loader";

// icons
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";


function ClientSignUp() {
  const [email, setEmail] = useState("");

  let { sendVerification, loading } = useContext(AuthContext);


  const validate = () => {
    sendVerification(email, "customer");
  };

  return (
    <div className="bg-lightGray h-screen">
      <Navbar variant={true} login={true} />

      <div className="auth-center">
        <div className="bg-lightGray md:bg-white md:shadow-md w-full md:w-[38rem] rounded-2xl md:p-10 p-2">
          <h1 className="text-left text-2xl md:text-3xl w-96 font-semibold">
            What's your phone number or email?
          </h1>

          {/* details */}
          <div className="my-5">
            <form
              disabled={email.length < 5}
              onSubmit={(e) => {
                e.preventDefault();
                validate();
              }}
            >
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Enter your email or phone number"
                className="auth-input"
              />
              <button
                disabled={email.length < 5 || loading}
                onClick={() => {
                  validate();
                }}
                className="btn-primary w-full my-5"
              >
                {loading ? <Loader /> : "Continue"}
              </button>
            </form>

            <p className="text-gray text-sm my-3 text-center w-full">or</p>
            <button className="auth-social-btn">
              <FcGoogle className="inline-block mr-2" />
              Continue with Google
            </button>
            <button className="auth-social-btn">
              <FaApple className="inline-block mr-2" />
              Continue with Apple
            </button>
            <button className="auth-social-btn">
              <FaFacebook className="inline-block mr-2" />
              Continue with Facebook
            </button>

            <p className="text-xs font-light text-gray my-5 text-center">
              {" "}
              By proceeding, you consent to get calls, WhatsApp or SMS messages,
              including by automated means, from Handys and its affiliates to
              the number provided.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientSignUp;
