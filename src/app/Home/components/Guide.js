import React from "react";

import man from "../../../assets/img/man.png";
import city from "../../../assets/img/city.png";

function Guide() {
  return (
    <div className="px-20 my-20 mx-auto flex gap-20 md:flex-row flex-col">
      <div>
        <img src={man} alt="man" />
        <h3 className="font-semibold text-lg mt-4 mb-2">
          Undersand how Hands Works
        </h3>
        <p className="font-light text-pray">
          Get access to a steady stream of new clients and the ability to easily
          manage projects, communication, and payment through our easy-to-use
          app. Plus, you can build a strong reputation and earn fair payment for
          your hard work.
        </p>
        <button className="mt-10 text-primary">Read Help Guide</button>
      </div>
      <div>
        <img src={city} alt="man" />
        <h3 className="font-semibold text-lg mt-4 mb-2">
          View our available cities
        </h3>
        <p className="font-light text-pray">
          Easily find skilled tradespeople in your area. Our app makes it easy
          to connect with professionals who have the skills and availability you
          need, no matter where you are.
        </p>
        <button className="mt-10 text-primary">Read Help Guide</button>
      </div>
    </div>
  );
}

export default Guide;
