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
    <div className="py-10 px-20 mx-auto">
      <div className="flex justify-between">
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
        <div className="flex gap-5">
          <div>
            <TbWorld className="inline-block mr-1" /> English
          </div>
          <div>
            <IoLocation className="inline-block mr-1" /> Kamloops
          </div>
        </div>
      </div>
      <div className="mt-20 flex justify-between">
        <p>© 2023 Handys Inc.</p>
        <div>
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
