import React, { Fragment, useContext } from "react";

import { NavLink } from "react-router-dom";

import { Menu, Transition } from "@headlessui/react";

import { HiMenu } from "react-icons/hi";

import logo from "../../assets/logo/logo.svg";
import { AuthContext } from "../../app/Auth/AuthContext";

import Avatar from "../Avatar/Avatar";

function Navbar({ variant, login, help = false }) {
  let { currentUser, logOut } = useContext(AuthContext);

  // menu links
  const links = [
    // { href: "/messages", label: "Messages" },
    // { href: "/service-history", label: "Service History" },
    // { href: "/account", label: "Account" },
    { href: "/help", label: "Help" },
    { href: "/", label: "Logout" },
  ];

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
          {currentUser ? (
            <div className="flex gap-4 items-center">
              {currentUser.userAccess.includes("customer") ? (
                <a href={`${process.env.REACT_APP_CUSTOMER}`}>
                  Switch to customer portal
                </a>
              ) : (
                <a href={`${process.env.REACT_APP_PROVIDER}`}>
                  Switch to customer portal
                </a>
              )}
              {/* MENU */}
              <div>
                <Menu as="div" className="relative inline-block text-left z-50">
                  <div>
                    <Menu.Button className="flex cursor-pointer items-center justify-center w-10 h-10 rounded-full text-center bg-[#F5F5F5] text-black">
                      <HiMenu size={24} className="inline text-center" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    z
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-1 py-1 ">
                        {links.map((link) => (
                          <Menu.Item key={link.href} as="div">
                            {({ active }) => (
                              <a href={link.href}>
                                <button
                                  // log out functionality
                                  onClick={() => {
                                    if (link.label === "Logout") {
                                      logOut();
                                    }
                                  }}
                                  className={`${
                                    active
                                      ? "text-black bg-lightSecondary"
                                      : "text-gray"
                                  } group flex w-full items-center rounded-full px-4 py-3 text-lg font-normal`}
                                >
                                  {/* {active ? <span>Active</span> : <div>Inactive</div>} */}
                                  {link.label}
                                </button>
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <Avatar />
            </div>
          ) : (
            <div>
              <NavLink to="/login">
                <button className="btn-hollow mr-5 md:mr-10">Log In</button>
              </NavLink>
              <NavLink to="/signup">
                <button className="btn-primary">Sign Up</button>
              </NavLink>
            </div>
          )}
        </Fragment>
      )}
    </div>
  );
}

export default Navbar;
