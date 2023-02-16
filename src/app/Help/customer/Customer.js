import React from "react";
import { NavLink } from "react-router-dom";

function Customer() {
  return (
    <div>
      Customer
      <NavLink to="provider/4">Provider test</NavLink>
    </div>
  );
}

export default Customer;
