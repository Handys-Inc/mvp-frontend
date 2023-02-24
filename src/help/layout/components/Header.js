import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

import Profile from "../../../assets/img/profile.png";
import logo from "../../../assets/logo/logo.svg";

import Bell from "../../../assets/custom/Bell";

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

import { HiMenu } from "react-icons/hi";

import { IoArrowBackOutline } from "react-icons/io5";

function Header() {
  const links = [
    { href: "/messages", label: "Messages" },
    { href: "/service-history", label: "Service History" },
    { href: "/account", label: "Account" },
    { href: "/help", label: "Help" },
    { href: "/", label: "Logout" },
  ];

  const [current, setCurrent] = useState("");

  useEffect(() => {
    setCurrent(window.location.pathname);
  }, []);
  return (
    <div className="block  z-30">
      <div className="flex flex-row justify-between items-center px-5 pt-5 pb-0 md:pb-3">
        <div className="flex items-center gap-2">
          <NavLink to="/">
            <img
              className="hidden md:block w-20 md:w-28"
              src={logo}
              alt="Logo"
            />
          </NavLink>
          <NavLink to="/">
            <IoArrowBackOutline className="block md:hidden" />
          </NavLink>
          <NavLink to="/help">
            <p className="text-lg md:text-2xl font-bold"> Help Center</p>
          </NavLink>
        </div>

        {/* Links */}

        {/* Profile  */}
        <div className="flex items-center gap-2">
          {/* NOTIFICATIONS MODAL */}
          <div className="relative inline-block text-left">
            <div className="flex cursor-pointer items-center justify-center w-10 h-10 rounded-full text-center bg-[#F5F5F5] text-black">
              <Bell size={20} className="inline text-center" />
            </div>
          </div>
          {/* END OF NOTIFICATIONS MODAL */}

          {/* Links */}
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

          <img className="hidden md:block w-10" src={Profile} alt="user" />
        </div>
      </div>
      <div className="text-faintGray hidden md:block">
        <hr />
      </div>
    </div>
  );
}

export default Header;
