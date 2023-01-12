import React, { Fragment } from "react";

import { Tab } from "@headlessui/react";

// icons
import HammerIcon from "../../../assets/icons/svg/HammerIcon";
import WandIcon from "../../../assets/icons/svg/WandIcon";

// man

// components
import SignUp from "./SignUp";
import Search from "./Search";

// custom css
import "./index.css";

function Header() {
  return (
    <div className="bg-none md:bg-workerHero md:min-h-[80vh] bg-no-repeat bg-cover flex flex-col md:flex-row items-center md:px-20 mx-auto">
      <div className="bg-secondary md:rounded-2xl w-full md:w-[35rem] md:h-[25rem]">
        <Tab.Group>
          <div class="border-b border-white">
            <Tab.List class="flex flex-wrap justify-around -mb-px pt-4">
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "inline-flex p-4 text-primary border-b-2 border-primary  focus:outline-none"
                        : "inline-flex p-4 text-gray border-b-2 border-none"
                    }
                  >
                    <HammerIcon
                      className="mr-5"
                      fill={selected ? "#CE1449" : "#626262"}
                    />
                    <span className="ml-2">Provide Service</span>
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "inline-flex p-4 text-primary border-b-2 border-primary  focus:outline-none"
                        : "inline-flex p-4 text-gray border-b-2 border-none  "
                    }
                  >
                    <WandIcon fill={selected ? "#CE1449" : "#626262"} />{" "}
                    <span className="ml-2">Get Services</span>
                  </button>
                )}
              </Tab>
              {/* <li class="mr-2">
                <span class=" hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                  Profile
                </span>
              </li>
              <li class="mr-2">
                <span class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active ">
                  Dashboard
                </span>
              </li> */}
            </Tab.List>
          </div>
          <Tab.Panels className="px-5 md:px-10">
            <Tab.Panel>
              <SignUp />
            </Tab.Panel>
            <Tab.Panel>
              <Search />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>

      {/* <Tab.Group>
        <Tab.List className=" custom-border justify-around border-b border-white outline-none pt-4"></Tab.List>
    
      </Tab.Group> */}

      <div className="block md:hidden  w-full bg-secondary bg-workerHero h-[22rem] bg-cover bg-center">
        {/* <img src={man} alt="workers" className="w-full h-[20rem]" /> */}
      </div>
    </div>
  );
}

export default Header;
