import React from "react";

function Header() {
  return (
    <div className="bg-workerHero h-screen bg-no-repeat bg-cover flex items-center px-20 mx-auto">
      <div className="bg-secondary p-10 rounded-3xl">
        <div>Provide Service</div>
        <h2 className="text-4xl">
          Connect with customers in <br /> need of your skills
        </h2>
        <p>Find work that fits your skills and schedule</p>
        <form>
          <input className="" placeholder="Enter your email" />
        </form>
      </div>
      <div>{/* placeholder */}</div>
    </div>
  );
}

export default Header;
