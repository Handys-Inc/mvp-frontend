import React from "react";

function Search() {
  return (
    <div>
      <h2 className="text-4xl font-semibold my-5 leading-normal">
        {" "}
        Search for a handyperson
      </h2>
      <p className="font-light text-xl text-gray mb-5">
        Find and request for the services you need on handys
      </p>

      <input
        className="block w-full rounded-full mb-5 outline-none pl-5 py-3"
        placeholder="Eg. Painter"
      />

      <button className="btn-primary mr-5">Request Now</button>
      <button className="btn-primary-outline">Schedule for later</button>
    </div>
  );
}

export default Search;
