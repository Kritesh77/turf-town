"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { LOGIN_TYPES } from "@/utils/constants";
import PhoneVerification from "./PhoneVerification";
import InitialLoginScreen from "./InitialLoginScreen";

const LoginOptions = () => {
  useEffect(() => {
    console.log("Rendering LoginOptions");
  }, []);

  const loginMethods = useMemo(
    () => ({
      PHONE: {
        component: PhoneVerification,
        props: {
          subTitle: "Keep your phone closeby to verify",
          title: "Enter your phone number",
        },
      },
      INITIAL: {
        component: InitialLoginScreen,
        props: {
          title: "Welcome to the Command Centre",
          subTitle: "Login to access and manage the Townverse.",
          coolShapeImage: {
            src: "/assets/icons/Cool Shape.svg",
            alt: "turf town logo",
          },
        },
      },
    }),
    []
  );

  const initiateLogin = (e, forceToLoginScreen = false) => {
    if (forceToLoginScreen) {
      setStepData(loginMethods.INITIAL);
      return;
    }

    const type = e?.target?.getAttribute("data-target");
    if (!type || !loginMethods[type]) {
      console.error("Invalid login type:", type);
      return;
    }

    setStepData(loginMethods[type]);
  };

  const [stepData, setStepData] = useState(loginMethods.INITIAL);

  const LoginComponent = stepData.component;

  return <LoginComponent {...stepData.props} handleClick={initiateLogin} />;
};

export default LoginOptions;
