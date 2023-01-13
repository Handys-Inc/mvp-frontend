import { render } from "@testing-library/react";
import React, { useState } from "react";
import Code from "./flow/Code";
import Data from "./flow/Data";
import Bio from "./flow/Bio";
import Password from "./flow/Password";
import Terms from "./flow/Terms";

function ProviderFlow() {
  const [step, setStep] = useState(0);

  console.log("step", step);

  switch (step) {
    case 0:
      return <Code step={step} setStep={setStep} />;

    case 1:
      return <Data step={step} setStep={setStep} />;

    case 2:
      return <Bio step={step} setStep={setStep} />;

    case 3:
      return <Password step={step} setStep={setStep} />;

    case 4:
      return <Terms step={step} setStep={setStep} />;

      break;

    default:
      return <Code step={step} setStep={setStep} />;
  }
}

export default ProviderFlow;
