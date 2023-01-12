import React from "react";

import logo from "../../assets/logo/logo.svg";

function Navbar() {
  return (
    <div className="flex justify-between items-center px-2 md:px-20 py-2 mx-auto">
      <div>
        <img className="w-20 md:w-28" src={logo} alt="Logo" />
      </div>
      <div>
        <button className="btn-hollow mr-5 md:mr-10">Log In</button>
        <button className="btn-primary">Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;
