"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import LoginTextComp from "@/components/common/LoginText";
import { isPhoneNumberValid } from "@/utils/functions";
import React, { useEffect, useState } from "react";

const PhoneVerificationStep1 = ({handleClick}) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [number, setNumber] = useState("");

  const handleInputClick = (e) => {
    e.preventDefault();
    // setNumber(e.target.value);
  };

  useEffect(() => {
    if (isPhoneNumberValid(number)) {
      setIsButtonDisabled(false);
      return;
    }
    setIsButtonDisabled(true);
  }, [number]);

  return (
    <>
      <div className="login-btn-containers">
        <div className="phone-input-container">
          <div className="relative country-container">
            <span className="btn-icon country-flag">🇮🇳</span>
            <p className="country-code">+91</p>
          </div>
          <div className="phone-input" onClick={() => setNumber(9941882305)}>
            <Input
              type="tel"
              name="phoneNo"
              value={number}
              handleChange={handleInputClick}
              placeholder="Enter your phone number"
            />
          </div>
        </div>
        <div>
          <Button
          handleClick={handleClick}
            title="Continue"
            isDisabled={isButtonDisabled}
            color={"primary"}
          />
        </div>
      </div>
    </>
  );
};

export default PhoneVerificationStep1;
