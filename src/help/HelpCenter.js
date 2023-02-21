import React, { Fragment } from "react";

import { Tab } from "@headlessui/react";
import Search from "./layout/components/Search";


import Customer from "./customer/Customer";
import Provider from "./provider/Provider";

import "./index.css";

function HelpCenter() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <div>
      <Search />

      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <div class="border-b border-[#99989821] border-opacity-20">
          <Tab.List class="flex flex-wrap -mb-px pt-4">
            <Tab as={Fragment}>
              {({ selected }) => (
                <button className={selected ? "active-tab" : " inactive-tab "}>
                  <span className="ml-2">Customers</span>
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button className={selected ? "active-tab" : " inactive-tab "}>
                  <span className="ml-2">Service providers</span>
                </button>
              )}
            </Tab>
          </Tab.List>
        </div>
        <Tab.Panels className="px-5 mt-5">
          <Tab.Panel>
            <Customer />
          </Tab.Panel>
          <Tab.Panel>
            <Provider />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default HelpCenter;
