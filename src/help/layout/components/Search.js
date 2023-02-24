import React, { useState, useEffect } from "react";

import { FiSearch } from "react-icons/fi";

import { NavLink } from "react-router-dom";

import { HiOutlineDocumentText } from "react-icons/hi";

function Search({ articles }) {
  // initialize search
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [hits, setHits] = useState([]);

  useEffect(() => {
    setShow(true);
    if (search !== "") {
      setHits(
        articles.filter(
          (article) =>
            article.title.toLowerCase().includes(search.toLowerCase()) ||
            article.shortDesc.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setHits([]);
    }
  }, [search]);

  return (
    <div
      onClick={() => setShow(false)}
      className="relative py-10 mx-auto text-center"
    >
      <h3 className="hidden md:block text-4xl font-semibold mb-5">
        Hello Username, how can we help?
      </h3>
      <div className="max-w-lg mx-auto">
        <div className="border border-faintGray shadow-md w-full text-left flex justify-between pl-4 pr-2 rounded-full py-1">
          <input
            className="text-sm md:text-base appearance-none w-full flex-1"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search topics and keywords eg.payment"
          />
          <div className="bg-primary h-10 cursor-pointer hover:bg-opacity-90 w-10 flex items-center justify-center rounded-full text-white">
            <FiSearch size={20} />
          </div>
        </div>
      </div>
      {show && hits.length >= 1 && (
        <div className="mx-auto w-full md:w-1/3 mt-5 absolute right-1 md:right-1/3 bg-white border rounded-2xl p-5 border-faintGray min-h-[10rem] shadow-md z-30">
          <div className="flex justify-between mb-4">
            <h4 className="text-left font-semibold">Top articles</h4>
            <p
              className="text-sm hover:text-primary cursor-pointer"
              onClick={() => {
                setHits([]);
                setShow(false);
                setSearch("");
              }}
            >
              Clear search
            </p>
          </div>
          {/* Show hits */}
          {hits.map((hit) => {
            return (
              <NavLink to={`article/${hit.slug}`}>
                <div className="text-left flex gap-3 items-center mb-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-mute rounded-full ">
                    <HiOutlineDocumentText className="text-gray" size={18} />
                  </div>
                  <h4 className="text-gray hover:text-primary ">{hit.title}</h4>
                </div>
              </NavLink>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Search;
