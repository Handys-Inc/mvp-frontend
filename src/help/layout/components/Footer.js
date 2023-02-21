/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'


import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsYoutube,
  BsInstagram,
} from "react-icons/bs";

import { TbWorld } from "react-icons/tb";

function Footer() {
  return (
    <footer className="py-5 px-5  mx-auto text-sm font-medium flex items-center flex-col md:flex-row justify-between">
        <div className="flex gap-5">
          <p>©{new Date().getFullYear()} Handys Inc.</p>
          <ul>
            <li className="inline-block mr-5 cursor-pointer">Privacy</li>
            <li className="inline-block cursor-pointer">Terms</li>
          </ul>
        </div>
        <div className="mt-10 md:mt-0 ">
          <div className="flex gap-20 items-center">
            <div className="flex items-center gap-5 mt-10 md:mt-0">
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
  )
}

export default Footer