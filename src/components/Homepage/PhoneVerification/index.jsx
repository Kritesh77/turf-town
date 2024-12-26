import React, { useEffect, useState, useCallback, useMemo } from "react";
import InputPhoneNumber from "./InputPhoneNumber";
import InputVerificationCode from "./InputVerificationCode";
import LoginTextComp from "@/components/common/LoginText";
import { motion } from "framer-motion";
import { basicOpacityAnimate } from "@/utils/framerAnimate";

const PhoneVerification = (props) => {
  useEffect(() => {
    console.log("Rendering PhoneVerification");
  }, []);

  const [step, setStep] = useState(0);
  
  const handleStep = useCallback(() => {
    setStep((prevStep) => prevStep + 1);
  }, []);

  const loginSteps = useMemo(
    () => [
      {
        id: 1,
        step: 1,
        props: {
          title: "Enter your phone number",
          subTitle: "Keep your phone closeby to verify.",
          handleClick: handleStep,
        },
        component: InputPhoneNumber,
      },
      {
        id: 2,
        step: 2,
        props: {
          title: "Enter the code sent",
          subTitle: "Please check your texts on +91 9840652520",
          handleClick: props.handleClick,
        },
        component: InputVerificationCode,
      },
    ],
    [props.handleClick]
  );

  const stepData = useMemo(() => loginSteps[step], [loginSteps, step]);

 
  const PhoneVerificationComponent = stepData.component;

  return (
    <motion.section {...basicOpacityAnimate}>
      <LoginTextComp
        title={props?.title}
        subTitle={props?.subTitle}
        coolShapeImage={props?.coolShapeImage}
      />
      <PhoneVerificationComponent {...stepData.props} />
    </motion.section>
  );
};

export default PhoneVerification;
