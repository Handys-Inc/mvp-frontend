import React from "react";

import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsYoutube,
  BsInstagram,
} from "react-icons/bs";

import { TbWorld } from "react-icons/tb";
import { IoLocation } from "react-icons/io5";
function Footer() {
  return (
    <div className="py-10 px-5 md:px-20 mx-auto">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex gap-10">
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
        <div className="flex items-center gap-5 mt-10 md:mt-0">
          <div className="flex items-center">
            <TbWorld size={24} className="inline-block mr-1" />
            <span>English</span>
          </div>
          <div className="flex items-center">
            <IoLocation size={24} className="inline-block mr-1" /> Kamloops
          </div>
        </div>
      </div>
      <div className="mt-16 md:mt-20 text-sm flex flex-col md:flex-row justify-between text-gray">
        <p>© 2023 Handys Inc.</p>
        <div className="mt-10 md:mt-0 text-gray">
          <ul>
            <li className="inline-block mr-5">Privacy</li>
            <li className="inline-block mr-5">Accessibility</li>
            <li className="inline-block">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
