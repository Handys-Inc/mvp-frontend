import React, { Fragment } from "react";

import Navbar from "../../../components/Navbar/Navbar";

// icons
import { BsArrowRight } from "react-icons/bs";
import HammerIcon from "../../../assets/icons/svg/HammerIcon";
import WandIcon from "../../../assets/icons/svg/WandIcon";
import { NavLink } from "react-router-dom";

function LogIn() {
  return (
    <div className="bg-lightGray h-screen">
      <Navbar />
      <div className="text-[#DDDDDD] block md:hidden mt-2">
        <hr />
      </div>
      <div className="auth-center">
        <div className="bg-lightGray md:bg-white md:shadow-md w-full md:w-[38rem] rounded-2xl md:p-10 p-2">
          <h1 className="text-center text-2xl md:text-3xl font-semibold">
            Log into your account
          </h1>
          <p className="text-gray  font-light mt-1 text-center">
            Login to find work or skilled tradespeople
          </p>

          {/* options */}
          <div className="flex flex-col gap-5 mt-5 md:mt-10 mb-10">
            {/* Login As Client Option */}
            <NavLink className="w-full" to="/signup/client">
              <div className="auth-option">
                <div className="flex gap-5 items-center">
                  <div className="auth-icon">
                    <WandIcon fill="#CE1449" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold">
                      Login to get services
                    </h3>
                    <p className="font-light text-gray text-sm">
                      {" "}
                      Connect with skilled handypersons
                    </p>
                  </div>
                </div>
                <div>
                  <BsArrowRight className="ml-2 inline-block" />
                </div>
              </div>
            </NavLink>

            {/* Login as Provider Option */}
            <NavLink className="w-full" to="/signup/provider">
              <div className="auth-option">
                <div className="flex gap-5 items-center">
                  <div className="auth-icon">
                    <HammerIcon fill="#CE1449" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold">
                      Login to provide services
                    </h3>
                    <p className="font-light text-gray text-sm">
                      {" "}
                      Connect with potential clients
                    </p>
                  </div>
                </div>
                <div>
                  <BsArrowRight className="ml-2 inline-block" />
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
