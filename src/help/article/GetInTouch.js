import React from "react";

function GetInTouch() {
  return (
    <div>
      <h3 className="text-2xl font-semibold">Need to get in touch?</h3>
      <p className="text-gray font-light">
        We'll start with some questions and get you to the right place
      </p>
      <button className="btn-black-outline my-5">Contact Us</button>

      <p className="text-gray font-light">
        {" "}
        You can also{" "}
        <span className="underline font-semibold text-black hover:text-primary cursor-pointer">
          give us feedback
        </span>
      </p>
    </div>
  );
}

export default GetInTouch;
