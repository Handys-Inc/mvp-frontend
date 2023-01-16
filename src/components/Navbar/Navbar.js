import React, { Fragment } from "react";

import { NavLink } from "react-router-dom";

import logo from "../../assets/logo/logo.svg";

function Navbar({ variant, login }) {
  return (
    <div className="flex justify-between items-center px-2 md:px-20 py-2 mx-auto">
      <NavLink to="/">
        <img className="w-20 md:w-28" src={logo} alt="Logo" />
      </NavLink>

      {variant ? (
        // SHOW VARIANT
        <Fragment>
          {login ? (
            // SHOW only Login
            <div>
              <NavLink to="/login">
                <button className="btn-primary">Log In</button>
              </NavLink>
            </div>
          ) : (
            // Show only sign up
            <div>
              <NavLink to="/signup">
                <button className="btn-primary">Sign Up</button>
              </NavLink>
            </div>
          )}
        </Fragment>
      ) : (
        // NORMAL DISPLAY
        <Fragment>
          <div>
            <NavLink to="/login">
              <button className="btn-hollow mr-5 md:mr-10">Log In</button>
            </NavLink>
            <NavLink to="/signup">
              <button className="btn-primary">Sign Up</button>
            </NavLink>
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default Navbar;
