import React, { useContext, useState } from "react";

import { AuthContext } from "../../Auth/AuthContext";

import Loader from "../../../utils/Loader";

function SignUp() {
  const [email, setEmail] = useState("");

  let { sendVerification, loading } = useContext(AuthContext);

  const validate = () => {
    sendVerification(email, "provider");
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
          disabled={
            email.length < 4 ||
            !email.includes("@") ||
            !email.includes(".") ||
            loading
          }
          className="btn-primary absolute right-2 md:right-1"
        >
          {loading ? <Loader /> : " Sign Up"}
        </button>
      </div>
    </div>
  );
}
export default SignUp;
