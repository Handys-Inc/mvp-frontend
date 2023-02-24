import React from "react";
import { NavLink, useOutletContext } from "react-router-dom";

import { topics } from "../data/topics";

//
import { IoIosArrowForward } from "react-icons/io";

function Customer() {
  const data = useOutletContext();

  return (
    <div>
      <h4 className="mb-5 font-semibold text-2xl">Topics</h4>

      {/* topics */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 w-full">
        {topics.map((topic) => {
          return (
            <NavLink to={`customer/${topic.area}`}>
              <div
                className="flex justify-between items-center md:block"
                key={topic.id}
              >
                <div className="flex md:block md:gap-0 gap-3 text-gray items-center">
                  <div className="block md:hidden">{topic.icon}</div>

                  <img
                    className="hidden md:block object-cover"
                    src={topic.image}
                    alt={topic.title}
                  />
                  <h5 className="mt-0 md:mt-3">{topic.title}</h5>
                </div>

                <IoIosArrowForward className="block md:hidden" />
              </div>
            </NavLink>
          );
        })}
      </div>

      {/* top articles */}
      <h4 className="my-5 font-semibold text-xl">Top Articles</h4>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full mb-20">
        {data
          .filter((article) => article.category === "customer" && article.top)
          .map((article) => {
            return (
              <div id={article.id}>
                <NavLink to={`article/${article.slug}`}>
                  <h4 className="font-bold mb-1 cursor-pointer hover:text-primary underline underline-offset-4 text-lg">
                    {article.title}
                  </h4>
                </NavLink>
                <p className="text-gray font-light">{article.shortDesc}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Customer;
