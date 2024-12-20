import React, { useEffect, useState } from "react";
import PhoneVerificationStep1 from "./PhoneVerificationStep1";
import PhoneVerificationStep2 from "./PhoneVerificationStep2";
import LoginTextComp from "@/components/common/LoginText";

const PhoneVerification = ({ handleClick }) => {
  const [step, setStep] = useState(0);
  const loginSteps = [
    {
      id: 1,
      step: 1,
      title: "Enter your phone number",
      subTitle: "Keep your phone closeby to verify.",
      component: () => <PhoneVerificationStep1 handleClick={handleStep} />,
    },
    {
      id: 2,
      step: 2,
      title: "Enter the code sent",
      subTitle: "Please check your texts on +91 9840652520",
      component: () => <PhoneVerificationStep2 handleClick={handleClick} />,
    },
  ];
  const [stepData, setStepData] = useState(loginSteps[0]);

  useEffect(() => {
    setStepData(loginSteps[step]);
  }, [step]);

  const handleStep = () => {
    setStep(step + 1);
  };

  return (
    <>
      <LoginTextComp
        title={stepData?.title}
        subTitle={stepData?.subTitle}
        coolShapeImage={stepData?.coolShapeImage}
      />
      {stepData?.component?.()}
    </>
  );
};

export default PhoneVerification;
