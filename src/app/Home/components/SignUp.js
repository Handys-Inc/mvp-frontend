import React from "react";

function SignUp() {
  return (
    <div className="pb-10 md:pb-0">
      <h2 className="text-3xl md:text-4xl font-semibold my-5 leading-normal">
        {" "}
        Connect with customers in need of your skills
      </h2>
      <p className="font-light text-xl text-gray mb-5">
        Find work that fits your skills and schedule
      </p>
      <div className="relative">
        <input
          className="outline-none py-3 md:py-4 rounded-full w-full pl-10"
          placeholder="Enter your email"
        />
        <button className="btn-primary absolute right-2 top-[0.3rem] md:top-1">
          Sign Up
        </button>
      </div>
    </div>
  );
}
export default SignUp;
