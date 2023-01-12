import React from "react";

function SignUp() {
  return (
    <div>
      <h2 className="text-4xl font-semibold my-5 leading-normal">
        {" "}
        Connect with customers in need of your skills
      </h2>
      <p className="font-light text-xl text-gray mb-5">
        Find work that fits your skills and schedule
      </p>
      <form className="bg-white flex justify-between p-2 rounded-full">
        <input className="outline-none pl-10" placeholder="Enter your email" />
        <button className="btn-primary">Sign Up</button>
      </form>
    </div>
  );
}
export default SignUp;
