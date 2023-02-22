import React, { useEffect, useState } from "react";

import capitalize from "../../utils/Capitalize";

import { IoIosArrowForward } from "react-icons/io";

import { NavLink, useParams, useOutletContext } from "react-router-dom";

function CustomerCategory() {
  const data = useOutletContext();

  const { id } = useParams();

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(data.filter((article) => article.area === id));
  }, []);

  if (!(articles.length < 1)) {
    return (
      <div className="max-w-7xl mx-auto mt-10">
        {/* Header */}
        <div className="mt-5 text-base flex items-center gap-2">
          <NavLink to="/help">Help center</NavLink>
          <IoIosArrowForward className="inline mx-1" />
          <NavLink to={`/help/${articles[0].category}/${id}`}>
            {capitalize(articles[0].area)}
          </NavLink>{" "}
        </div>
        <h3 className="my-5 text-3xl text-black ">{capitalize(id)}</h3>

        {/* Article content and get in touch */}
        {articles.map((article) => {
          return (
            <NavLink to={`/help/article/${article.slug}`}>
              <h4 id={article.id} className="helped text-lg mb-2">
                {article.title}
              </h4>
            </NavLink>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="max-w-7xl mx-auto mt-10">
        {/* Header */}
        <div className="mt-5 text-base flex items-center gap-2">
          <NavLink to="/help">Help center</NavLink>
          <IoIosArrowForward className="inline mx-1" />

          {capitalize(id)}
        </div>
        <h3 className="my-5 text-3xl text-black ">{capitalize(id)}</h3>
      </div>
    );
  }
}

export default CustomerCategory;

// return (
//     <div className="max-w-5xl mx-auto mt-10">

// <h3>
//   Help Center | Getting Started
// </h3>

// <div className='flex justify-between'>

//   {/* Sub Category */}
//   <div>
//     <h4 className="font-bold text-3xl my-5">Getting started </h4>
//   </div>

//   {/* Related topics */}
//   <div>
//     <h4>Related Topics</h4>
//   </div>
// </div>

//     </div>
// )
