import React from "react";

import { NavLink } from "react-router-dom";

import logo from "../../assets/logo/logo.svg";

function Navbar() {
  return (
    <div className="flex justify-between items-center px-2 md:px-20 py-2 mx-auto">
      <NavLink to="/">
        <img className="w-20 md:w-28" src={logo} alt="Logo" />
      </NavLink>
      <div>
        <NavLink to="/login">
          <button className="btn-hollow mr-5 md:mr-10">Log In</button>
        </NavLink>
        <NavLink to="/signup">
          <button className="btn-primary">Sign Up</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
