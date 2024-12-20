import React from "react";
import LoginTextComp from "../common/LoginText";
import Button from "../common/Button";
import { LOGIN_TYPES } from "@/utils/constants";
import { motion } from "framer-motion";
import { basicOpacityAnimate } from "@/utils/framerAnimate";
const InitalLoginScreen = ({
  title,
  subTitle,
  coolShapeImage,
  handleClick,
}) => {
  return (
    <motion.section {...basicOpacityAnimate}>
      <LoginTextComp
        title={title}
        subTitle={subTitle}
        coolShapeImage={coolShapeImage}
      />
      <div className="login-btn-containers">
        <div>
          <Button
            name={LOGIN_TYPES.GOOGLE}
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
    </motion.section>
  );
};

export default InitalLoginScreen;
