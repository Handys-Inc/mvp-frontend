import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const validate = () => {
    navigate(`/auth/provider/validate/${email}`, { replace: true });
  };
  return (
    <div className="pb-10 md:pb-0">
      <h2 className="text-3xl md:text-4xl font-semibold my-5 leading-normal">
        {" "}
        Connect with customers in need of your skills
      </h2>
      <p className="font-light text-xl text-gray mb-5">
        Find work that fits your skills and schedule
      </p>
      <div className="relative flex items-center">
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="outline-none py-3 md:py-4 rounded-full w-full pl-5"
          placeholder="Enter your email"
        />

        <button
          onClick={() => {
            validate();
          }}
          disabled={email.length < 5}
          className="btn-primary absolute right-2 md:right-1"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
export default SignUp;
