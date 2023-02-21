import React from "react";

import { FiSearch } from "react-icons/fi";

function Search() {
  return (
    <div className="py-10 mx-auto text-center">
      <h3 className="text-4xl font-semibold mb-5">
        Hello Username, how can we help?
      </h3>
      <div className="max-w-lg mx-auto">
        <div className="border border-faintGray shadow-md w-full text-left flex justify-between pl-4 pr-2 rounded-full py-1">
          <input
            className="appearance-none w-full flex-1"
            placeholder="Search how tos and more"
          />
          <div className="bg-primary h-10 w-10 flex items-center justify-center rounded-full text-white">
            <FiSearch size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
