/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";

import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsYoutube,
  BsInstagram,
} from "react-icons/bs";

import { TbWorld } from "react-icons/tb";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className=" py-5 px-0 md:px-5 w-full mx-auto text-sm font-medium flex items-center flex-col md:flex-row justify-between">
      <div className="flex gap-5 w-full px-5">
        <p>©{new Date().getFullYear()} Handys Inc.</p>
        <ul>
          <NavLink to="/help/article/privacy-policy">
            <li className="inline-block mr-5 cursor-pointer">Privacy</li>
          </NavLink>
          <li className="inline-block cursor-pointer">Terms</li>
        </ul>
      </div>
      <div className="w-full  px-5 mt-5 md:mt-0 ">
        <div className="flex flex-col md:flex-row gap-5 md:gap-20 justify-end items-start md:items-center">
          <div className="flex flex-row items-center gap-5 md:mt-0">
            <div className="flex items-center">
              <TbWorld size={24} className="inline-block mr-1" />
              <span>English (CA)</span>
            </div>
            <div className="flex items-center">
              {/* <IoLocation size={24} className="inline-block mr-1" /> */}$
              CAD
            </div>
          </div>
          {/* Socials */}
          <div className="flex gap-5">
            <a href="#">
              <BsFacebook />
            </a>
            <a href="#">
              <BsTwitter />
            </a>
            <a href="#">
              <BsLinkedin />
            </a>
            <a href="#">
              <BsYoutube />
            </a>
            <a href="#">
              <BsInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
