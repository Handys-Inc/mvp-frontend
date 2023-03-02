import React, { useState, useEffect } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

import { NavLink } from "react-router-dom";
import FlowHeader from "./FlowHeader";

import { useNavigate } from "react-router-dom";

import OtpInput from "react-otp-input";

import Loader from "../../../../utils/Loader";
import services from "../../../../services";
import Notify from "../../../../components/Notify/Notify";

function Code({ data, step, setStep }) {
  const navigate = useNavigate();

  const [code, setCode] = useState("");

  const [loading, setLoading] = useState(false);

  const [allow, setAllow] = useState(false);

  useEffect(() => {
    if (code.length === 4) {
      setAllow(true);
    }
  }, [code]);

  const checkCode = () => {
    setLoading(true);
    services
      .verifyOTP(code)
      .then((res) => {
        setLoading(false);
        console.log("verify?", res);
        navigate(`/auth/provider/validate?step=2`);
      })
      .catch((e) => {
        setLoading(false);
        Notify("error", e.message);
        console.log("error verifying", e);
      });
  };

  return (
    <div className="bg-lightGray h-screen">
      <FlowHeader />

      <div className="auth-center">
        <div className="bg-lightGray md:bg-white md:shadow-md w-full md:w-[38rem] rounded-2xl md:p-10 p-2">
          <h1 className="text-left text-2xl md:text-3xl  font-semibold">
            Enter the 4-digit code sent to <br /> {data.email}
          </h1>
          <div className="my-5">
            <OtpInput
              value={code}
              className="custom-otp"
              onChange={(otp) => setCode(otp)}
              numInputs={4}
              separator={""}
            />
          </div>

          {/* details */}
          <div className="my-5">
            <NavLink to="/validate-resend">
              <span className="text-sm text-primary cursor-pointer">
                Didn't get code?
              </span>
            </NavLink>

            <div className="flex justify-between mt-5">
              <button
                onClick={() => navigate(-1)}
                className="btn-primary-outline"
              >
                <BsArrowLeft className="mr-2 inline-block" />
                Back{" "}
              </button>

              <button
                onClick={() => checkCode()}
                disabled={!allow || loading}
                className="btn-primary w-60 md:w-72"
              >
                {loading ? (
                  <Loader />
                ) : (
                  <React.Fragment>
                    Confirm and Continue{" "}
                    <BsArrowRight className="ml-2 inline-block" />
                  </React.Fragment>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Code;
