import React, { useState, useEffect } from "react";

import capitalize from "../../utils/Capitalize";

import { IoIosArrowForward } from "react-icons/io";

import { NavLink, useParams, useOutletContext } from "react-router-dom";
import GetInTouch from "./GetInTouch";
import Border from "../../components/Border/Border";

function Article() {
  const { slug } = useParams();
  const data = useOutletContext();

  // scroll to top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const [selectArticle, setSelectArticle] = useState(null);
  const [related, setRelated] = useState([]);

  const [change, setChange] = useState(false);

  useEffect(() => {
    setSelectArticle(data.filter((article) => article.slug === slug));
    setChange(!change);
  }, [slug]);

  useEffect(() => {
    if (selectArticle) {
      setRelated(
        data.filter((article) => article.area === selectArticle[0].area)
      );
    }
  }, [change]);

  if (!(selectArticle === null)) {
    const select = selectArticle[0];

    return (
      <div className="max-w-7xl mx-auto mt-10">
        {/* Header */}
        <div className="mt-5 text-lg flex items-center gap-2">
          <NavLink to="/help">Help center</NavLink>
          <IoIosArrowForward className="inline mx-1" />
          <NavLink to={`/help/${select.category}/${select.area}`}>
            {capitalize(select.area)}
          </NavLink>{" "}
          <IoIosArrowForward className="inline mx-1" /> {select.title}
        </div>
        <p className="mt-1 mb-5 font-light text-gray ">
          {capitalize(select.category)}
        </p>

        {/* Article content and get in touch */}

        <div className="flex gap-20 justify-between">
          <div className="w-8/12">
            <h3 className="text-xl font-semibold mb-2">{select.title}</h3>
            <div className="text-gray leading-loose">{select.content}</div>

            {/* Help or nah? */}
            <div className="text-gray my-5">
              <h4>
                Did this article help? <span className="helped">Yes</span>{" "}
                <span className="helped">No</span>
              </h4>
            </div>

            <Border />
            <h4 className="text-lg mt-5 mb-2">Suggested related articles</h4>
            {related
              .filter((article) => article.title !== selectArticle[0].title)
              .map((article) => {
                return (
                  <NavLink to={`/help/article/${article.slug}`}>
                    <h4 id={article.id} className="helped text-sm mb-2">
                      {article.title}
                    </h4>
                  </NavLink>
                );
              })}
          </div>
          <div className="w-4/12">
            <GetInTouch />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>rticle not found</p>A
      </div>
    );
  }
}

export default Article;
