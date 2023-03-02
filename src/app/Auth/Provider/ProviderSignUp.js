import React, { useRef } from "react";

import Navbar from "../../../components/Navbar/Navbar";

import { useNavigate } from "react-router-dom";
import Notify from "../../../components/Notify/Notify";
import Loader from "../../../utils/Loader";

import services from "../../../services";

function ProviderSignUp() {
  const emailRef = useRef();

  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  const validate = () => {
    const email = emailRef.current.value;

    if (email.length < 4 || !email.includes("@")) {
      Notify("info", "Please enter a valid email");
    } else {
      setLoading(true);
      services
        .verifyEmail(email)
        .then((res) => {
          setLoading(false);
          console.log("res", res.data, res.status);
          navigate(`/auth/provider/validate?step=1`, { state: email });
        })
        .catch((e) => {
          setLoading(false);
          Notify("error", "Error occured, Please try again");
          console.log("error", e);
        });
    }
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
                ref={emailRef}
                placeholder="Enter your email or phone number"
                className="auth-input"
              />
            </form>

            <button
              disabled={loading}
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
