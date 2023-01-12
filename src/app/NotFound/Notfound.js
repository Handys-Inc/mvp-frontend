import React from "react";

import { NavLink } from "react-router-dom";

import logo from "../../assets/logo/logo.svg";
import toolbox from "../../assets/icons/toolbox.svg";

function Notfound() {
  return (
    <div className="bg-secondary md:h-screen min-h-screen flex p-10 md:p-0">
      <div className="max-w-4xl flex mx-auto flex-col gap-5 md:gap-20 md:flex-row items-center justify-around">
        <div>
          <NavLink to="/">
            <img className="w-20 md:w-28" src={logo} alt="Logo" />
          </NavLink>
          <h1 className="text-6xl md:text-8xl mt-10 mb-5 font-bold">Oops!</h1>
          <p className="font-medium text-xl md:text-4xl">
            We can't seem to find the page you're looking for.
          </p>
          <p className="mt-5 md:mt-10 mb-3 md:mb-5 text-lg md:text-xl">
            Error code: 404
          </p>
          <p className="text-lg md:text-xl">
            Here are some helpful links instead
          </p>
          <NavLink to="/">
            <span className="text-primary block mt-3 md:mt-5"> Home </span>
          </NavLink>
          <NavLink to="/help">
            <span className="text-primary mt-2 block"> Help</span>
          </NavLink>
        </div>
        <div>
          <img src={toolbox} alt="toolbox" />
        </div>
      </div>
    </div>
  );
}

export default Notfound;
