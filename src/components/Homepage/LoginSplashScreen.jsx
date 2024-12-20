"use client";
import React, { useState } from "react";
import Button from "../common/Button";
import LoginTextComp from "../common/LoginText";
import { LOGIN_TYPES } from "@/utils/constants";
import PhoneVerification from "./PhoneVerification";
import InitalLoginScreen from "./InitalLoginScreen";
import { AnimatePresence } from "framer-motion";

const LoginSplashScreen = () => {
  const initiateLogin = (e, forceToLoginScreen) => {
    if (forceToLoginScreen) {
      setStepData(loginMethods[LOGIN_TYPES.INITIAL]);
      return;
    }
    e.preventDefault();
    const type = e.target.getAttribute("name");
    // if (!step) return;
    switch (type) {
      case LOGIN_TYPES.PHONE:
        setStepData(loginMethods[LOGIN_TYPES.PHONE]);
        break;
      case LOGIN_TYPES.INITIAL:
        setStepData(loginMethods[LOGIN_TYPES.INITIAL]);
        break;
      default:
        setStepData(loginMethods[LOGIN_TYPES.INITIAL]);
        return;
    }
  };
  const loginMethods = {
    GOOGLE: {},
    EMAIL: {},
    PHONE: {
      component: () => (
        <PhoneVerification
          subTitle="Keep your phone closeby to verify"
          title="Enter your phone number"
          handleClick={initiateLogin}
        />
      ),
    },

    INITIAL: {
      component: () => (
        <InitalLoginScreen
          title="Welcome to the Command Centre"
          subTitle="Login to access and manage the Townverse."
          coolShapeImage={{
            src: "./assets/icons/Cool Shape.svg",
            alt: "turf town logo",
          }}
          handleClick={initiateLogin}
        />
      ),
    },
  };
  const [stepData, setStepData] = useState(loginMethods.INITIAL);

  return <>{stepData?.component?.()}</>;
};

export default LoginSplashScreen;
