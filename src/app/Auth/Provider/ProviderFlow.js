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

  switch (step) {
    case 0:
      return <Code entry={location.state} />;

    case 1:
      return <Data />;

    case 2:
      return <Bio />;

    case 3:
      return <Password />;

    case 4:
      return <Terms />;

    default:
      return <Code />;
  }
}

export default ProviderFlow;
