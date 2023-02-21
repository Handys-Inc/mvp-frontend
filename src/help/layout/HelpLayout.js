import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function HelpLayout() {
  return (
    <div className="min-h-screen w-full">
      <nav className="bg-primary text-white p-10">
        <NavLink to="/help">Main Help Center</NavLink>
        <NavLink to="customer">Customers</NavLink>
        <NavLink to="provider/4">Provider test</NavLink>
      </nav>

      <Outlet />

      <footer>Footer here</footer>
    </div>
  );
}

export default HelpLayout;
