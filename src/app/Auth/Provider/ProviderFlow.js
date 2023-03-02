import React, { useEffect, useState } from "react";
import Code from "./flow/Code";
import Data from "./flow/Data";
import Bio from "./flow/Bio";
import Password from "./flow/Password";
import Terms from "./flow/Terms";

import { useLocation } from "react-router-dom";

import "./index.css";

function ProviderFlow() {
  const [step, setStep] = useState(0);
  const location = useLocation();

  useEffect(() => {
    // rip search out
    let newLoc = parseInt(location.search.split("=")[1]);
    setStep(newLoc - 1);
  }, [location.search]);

  // step

  // data
  const [email, setEmail] = useState(location.state);
  const [firstName, setFirstName] = useState("");

  let data = {
    firstName,
    lastName: "Doe",
    email,
    password: "password",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwiZXhwIjoxNjc3MTg0MDE5LCJpYXQiOjE2NzcxODA0MTl9.wtSmYxJKANEX5iTisJ8rjlJkj4fsq86s06MWXJYL2p4",
    userAccess: "provider",
  };

  let functions = {
    setEmail,
    setFirstName,
  };

  switch (step) {
    case 0:
      return (
        <Code data={data} functions={functions} step={step} setStep={setStep} />
      );

    case 1:
      return <Data step={step} setStep={setStep} />;

    case 2:
      return <Bio step={step} setStep={setStep} />;

    case 3:
      return <Password step={step} setStep={setStep} />;

    case 4:
      return <Terms step={step} setStep={setStep} />;

    default:
      return <Code step={step} setStep={setStep} />;
  }
}

export default ProviderFlow;
