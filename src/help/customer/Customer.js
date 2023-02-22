import React from "react";
import { NavLink, useOutletContext } from "react-router-dom";

import { topics } from "../data/topics";

function Customer() {
  const data = useOutletContext();

  return (
    <div>
      <h4 className="mb-5 font-semibold text-2xl">Topics</h4>

      {/* topics */}
      <div className="grid grid-cols-5 gap-5 w-full">
        {topics.map((topic) => {
          return (
            <NavLink to={`customer/${topic.area}`}>
              <div key={topic.id}>
                <img
                  className="object-cover"
                  src={topic.image}
                  alt={topic.title}
                />
                <h5 className="mt-3">{topic.title}</h5>
              </div>
            </NavLink>
          );
        })}
      </div>

      {/* top articles */}
      <h4 className="my-5 font-semibold text-xl">Top Articles</h4>

      <div className="grid grid-cols-3 gap-10 w-full mb-20">
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
