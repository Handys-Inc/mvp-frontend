import React from "react";

import { FiSearch } from "react-icons/fi";

function Search() {
  return (
    <div className="pb-10 md:pb-0">
      <h2 className="text-3xl md:text-4xl font-semibold my-3 md:my-5 leading-normal">
        {" "}
        Search for a handyperson
      </h2>
      <p className="font-light text-xl text-gray mb-5">
        Find and request for the services you need on handys
      </p>
      <div className="relative ">
        <FiSearch className="text-gray absolute mt-4 ml-5" />
        <input
          className="block w-full rounded-full mb-5 outline-none pl-12 py-3"
          placeholder="Eg. Painter"
        />
      </div>

      <button className="btn-primary mr-5">Request Now</button>
      <button className="btn-primary-outline">Schedule for later</button>
    </div>
  );
}

export default Search;
