"use client";
import React, { useState } from "react";
import Button from "../common/Button";
import LoginTextComp from "../common/LoginText";
import { LOGIN_TYPES } from "@/utils/constants";
import PhoneVerification from "./PhoneVerification";

const LoginSplashScreen = ({ isLoading }) => {
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

export const InitalLoginScreen = ({
  title,
  subTitle,
  coolShapeImage,
  handleClick,
}) => {
  return (
    <>
      <LoginTextComp
        title={title}
        subTitle={subTitle}
        coolShapeImage={coolShapeImage}
      />
      <div className="login-btn-containers">
        <div>
          <Button
            title="Login with Google"
            icon={{
              src: "/assets/icons/google 1.svg",
              alt: "Google icon",
            }}
          />
        </div>
        <div className="text-center separator">
          <p>or</p>
        </div>
        <div className="">
          <div>
            <Button
              handleClick={handleClick}
              name={LOGIN_TYPES.PHONE}
              title="Login with Phone"
              icon={{
                src: "/assets/icons/fi_4029932.svg",
                alt: "Phone icon",
              }}
            />
          </div>
          <div>
            <Button
              title="Login with Email"
              name={LOGIN_TYPES.EMAIL}
              icon={{
                src: "/assets/icons/email.svg",
                alt: "Email icon",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSplashScreen;
