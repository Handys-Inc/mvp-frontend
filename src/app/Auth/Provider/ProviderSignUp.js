import React, { useContext, useState } from "react";

import Navbar from "../../../components/Navbar/Navbar";

import Loader from "../../../utils/Loader";

import { AuthContext } from "../AuthContext";

function ProviderSignUp() {
  const [entry, setEntry] = useState("");

  let { sendVerification, loading } = useContext(AuthContext);

  const validate = () => {
    sendVerification(entry, "provider");
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
              onSubmit={(e) => {
                e.preventDefault();
                validate();
              }}
            >
              {" "}
              <input
                type="text"
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
                placeholder="Enter your email or phone number"
                className="auth-input"
              />
            </form>

            <button
              disabled={loading || entry.length < 5}
              onClick={() => {
                validate();
              }}
              className="btn-primary w-full my-5"
            >
              {loading ? <Loader /> : "Continue"}
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
