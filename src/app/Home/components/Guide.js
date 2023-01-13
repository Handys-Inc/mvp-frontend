import React from "react";

import man from "../../../assets/img/man.png";
import city from "../../../assets/img/city.png";

// icons
import { BsArrowRight } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";

function Guide() {
  const [viewCities, setViewCities] = React.useState(false);
  return (
    <div class=" px-5 md:px-20 my-20 grid grid-cols-1 md:grid-cols-2 gap-10">
      {" "}
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
        <button className="mt-10 text-primary font-semibold">
          Read Help Guide <BsArrowRight className="ml-2 inline-block" />
        </button>
      </div>
      <div>
        {viewCities ? (
          <div className="bg-secondary text-primary flex justify-center items-center rounded-md w-full h-[25rem]">
            <div className="text-center px-2 md:px-10">
              <IoLocation
                size={72}
                className="text-primary inline-block text-center mb-5"
              />
              <p className="text-2xl md:text-3xl">
                Currently available in Kamloops. Coming soon to Kelowna,
                Chilliwack and Abbotsford
              </p>
            </div>
          </div>
        ) : (
          <img src={city} alt="man" />
        )}

        <h3 className="font-semibold text-lg mt-4 mb-2">
          View our available cities
        </h3>
        <p className="font-light text-pray">
          Easily find skilled tradespeople in your area. Our app makes it easy
          to connect with professionals who have the skills and availability you
          need, no matter where you are.
        </p>
        <button
          onClick={() => {
            setViewCities(!viewCities);
          }}
          className="mt-10 text-primary font-semibold"
        >
          View all cities <BsArrowRight className="ml-2 inline-block" />
        </button>
      </div>
    </div>
  );
}

export default Guide;
