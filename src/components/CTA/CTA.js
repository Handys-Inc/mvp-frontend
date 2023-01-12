import React from "react";

function CTA() {
  return (
    <div className="py-20 bg-primary text-white text-center">
      <h3 className="text-2xl md:text-4xl font-semibold">
        Get started with Handys today!
      </h3>
      <p className="px-5 mx-auto  max-w-lg md:px-0 py-2 md:py-5 font-light">
        Join our community and take control of your income or find reliable
        professionals today
      </p>
      <div className="mt-5 mx-5 md:mx-0 md:mt-10 ">
        <button className="btn-white mr-5">Provide Services</button>
        <button className="btn-white-outline">Get Services</button>
      </div>
    </div>
  );
}

export default CTA;
