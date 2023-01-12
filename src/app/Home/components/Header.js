import React, { useState, Fragment } from "react";

import { Tab } from "@headlessui/react";

// icons
import HammerIcon from "../../../assets/icons/svg/HammerIcon";
import WandIcon from "../../../assets/icons/svg/WandIcon";
import SignUp from "./SignUp";
import Search from "./Search";

function Header() {
  const [view, setView] = useState("provide");

  return (
    <div className="bg-workerHero min-h-[80vh] bg-no-repeat bg-cover flex items-center px-20 mx-auto">
      <div className="bg-secondary rounded-2xl w-[35rem] h-[25rem]">
        <Tab.Group>
          <Tab.List className="flex justify-around border-b border-white outline-none pt-4">
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected
                      ? "inline-flex p-4 text-primary border-b-2 border-primary focus:ring-0 ring-0"
                      : "inline-flex p-4 text-gray border-b-2 border-none "
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
                      ? "inline-flex p-4 text-primary border-b-2 border-primary  active"
                      : "inline-flex p-4 text-gray border-b-2 border-none  "
                  }
                >
                  <WandIcon fill={selected ? "#CE1449" : "#626262"} />{" "}
                  <span className="ml-2">Get Services</span>
                </button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels className="px-10">
            <Tab.Panel>
              <SignUp />
            </Tab.Panel>
            <Tab.Panel>
              <Search />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>

      <div>{/* placeholder */}</div>
    </div>
  );
}

export default Header;

// <div className="bg-secondary h-[25rem] w-[45rem] p-16 rounded-3xl">
//   <div className="flex flex-row  items-center border-b border-white border-spacing-y-9">
//     <div
//       onClick={() => setView("provide")}
//       className="flex items-center cursor-pointer"
//     >
//       <HammerIcon className="mr-5" fill="#CE1449" />
//       <span className="ml-2">Provide Service</span>
//     </div>
//     <div
//       onClick={() => setView("get")}
//       className="flex items-center cursor-pointer"
//     >
//       <WandIcon fill="#626262" /> <span className="ml-2">Get Services</span>
//     </div>
//   </div>

//   {/* Other part */}
//   <div className="">
//     <h2 className="text-5xl font-semibold my-5">
//       {view === "provide" && (
//         <span>
//           {" "}
//           Connect with customers in <br /> need of your skills
//         </span>
//       )}
//       {view === "get" && <span>Search for a handyperson</span>}
//     </h2>

//     {/* Desc */}
//     <p className="font-light text-xl text-gray mb-10">
//       {view === "provide" ? (
//         <span> Find work that fits your skills and schedule</span>
//       ) : (
//         <span>Find and request for the services you need on handys</span>
//       )}
//     </p>
//     {view === "provide" ? (
//       <form className="bg-white flex justify-between p-2 rounded-full">
//         <input
//           className="outline-none pl-10"
//           placeholder="Enter your email"
//         />
//         <button className="btn-primary">Sign Up</button>
//       </form>
//     ) : (
//       <div>
//         {" "}
//         <button className="btn-primary mr-5">Request Now</button>
//         <button className="btn-primary-outline">Schedule for later</button>
//       </div>
//     )}
//   </div>
// </div>;
