"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { isPhoneNumberValid } from "@/utils/functions";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { basicOpacityAnimate } from "@/utils/framerAnimate";

const InputPhoneNumber = ({ handleClick }) => {
  const [number, setNumber] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputClick = useCallback((e) => {
    e.preventDefault();
    // setNumber(e.target.value);
    setNumber(9941882305);
  }, []);

  const validateAndProceed = useCallback(() => {
    if (isButtonDisabled) return;
    handleClick();
  }, [isButtonDisabled, handleClick]);

  useEffect(() => {
    setIsButtonDisabled(!isPhoneNumberValid(number));
  }, [number]);

  return (
    <motion.section {...basicOpacityAnimate}>
      <div className="login-btn-containers">
        <div className="phone-input-container">
          <div className="relative country-container">
            <span className="btn-icon country-flag">🇮🇳</span>
            <p className="country-code">+91</p>
          </div>
          <div className="w-full">
            <Input
              type="tel"
              name="phoneNo"
              value={number}
              inputStyles="phone-input"
              handleChange={handleInputClick}
              placeholder="Enter your phone number"
            />
          </div>
        </div>
        <div>
          <Button
            handleClick={validateAndProceed}
            title="Continue"
            isDisabled={isButtonDisabled}
            color={"primary"}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default InputPhoneNumber;
