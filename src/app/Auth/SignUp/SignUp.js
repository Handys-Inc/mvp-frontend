import React from "react";

import Navbar from "../../../components/Navbar/Navbar";

// icons
import { BsArrowRight } from "react-icons/bs";
import HammerIcon from "../../../assets/icons/svg/HammerIcon";
import WandIcon from "../../../assets/icons/svg/WandIcon";
import { NavLink } from "react-router-dom";

function SignUp() {
  React.useEffect(() => {
    // clear session storage at start of the sign up process
    let newUser = sessionStorage.getItem("newUser");
    sessionStorage.setItem(
      "newUser",
      JSON.stringify({ ...newUser, email: null, phone: null })
    );
  }, []);
  return (
    <div className="bg-lightGray h-screen">
      <Navbar variant={true} login={true} />

      <div className="auth-center">
        <div className="bg-lightGray md:bg-white md:shadow-md w-full md:w-[38rem] rounded-2xl md:p-10 p-2">
          <h1 className="text-center text-2xl md:text-3xl font-semibold">
            Create your account
          </h1>
          <p className="text-gray  font-light mt-1 text-center">
            Sign up to find work or skilled trades people
          </p>

          {/* options */}
          <div className="flex flex-col gap-5 mt-5 md:mt-10 mb-10">
            {/* Sign Up As Client Option */}
            <NavLink className="w-full" to="/signup/client">
              <div className="auth-option">
                <div className="flex gap-5 items-center">
                  <div className="auth-icon">
                    <WandIcon fill="#CE1449" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold">
                      Sign up to get services
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

            {/* Sign Up as Provider Option */}
            <NavLink className="w-full" to="/signup/provider">
              <div className="auth-option">
                <div className="flex gap-5 items-center">
                  <div className="auth-icon">
                    <HammerIcon fill="#CE1449" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold">
                      Sign up to provide services
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

export default SignUp;
