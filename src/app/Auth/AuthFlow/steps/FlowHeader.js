import React from 'react'

import { NavLink } from "react-router-dom";

import logo from "../../../../assets/logo/logo.svg";

function FlowHeader() {
  return (
    <NavLink to="/">
      <img className="mt-2 mx-2 w-20 md:w-28" src={logo} alt="logo" />
    </NavLink>
  )
}

export default FlowHeader