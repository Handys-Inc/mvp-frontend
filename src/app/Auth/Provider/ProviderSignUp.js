import React, { useState } from "react";

import Navbar from "../../../components/Navbar/Navbar";

// icons
import { BsArrowRight } from "react-icons/bs";

import { useNavigate } from "react-router-dom";

function ProviderSignUp() {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const validate = () => {
    navigate(`/auth/provider/validate/${email}`, { replace: true });
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
              {" "}
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Enter your email or phone number"
                className="auth-input"
              />
            </form>

            <button
              disabled={email.length < 5}
              onClick={() => {
                validate();
              }}
              className="btn-primary w-full my-5"
            >
              Continue
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

export default ProviderSignUp;
