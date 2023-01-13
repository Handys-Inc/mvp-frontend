import React from "react";

import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

import Navbar from "../../../../components/Navbar/Navbar";

function Bio({ step, setStep }) {
  return (
    <div className="bg-lightGray h-screen">
      <Navbar />
      <div className="text-mute block md:hidden mt-2">
        <hr />
      </div>

      <div className="auth-center">
        <div className="bg-lightGray md:bg-white md:shadow-md w-full md:w-[38rem] rounded-2xl md:p-10 p-2">
          <h1 className="text-left text-2xl md:text-3xl  font-semibold">
            What's your name
          </h1>

          <div className="mt-5">
            <input
              type="text"
              placeholder="First Name"
              className="auth-input mb-4"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="auth-input "
            />
          </div>
          <div className="flex justify-between mt-5">
            <button className="btn-primary-outline">
              <BsArrowLeft
                onClick={() => setStep(step - 1)}
                className="mr-2 inline-block"
              />
              Back{" "}
            </button>
            <button onClick={() => setStep(step + 1)} className="btn-primary ">
              Next <BsArrowRight className="ml-2 inline-block" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
