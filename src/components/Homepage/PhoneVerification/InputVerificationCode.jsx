"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { showToast, ToastContainer } from "@/components/common/ToastContainer";
import useTimer from "@/hooks/useTimer";
import { formatTime, isOtpValid } from "@/utils/functions";
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { basicOpacityAnimate } from "@/utils/framerAnimate";

const InputVerificationCode = ({ handleClick }) => {
  const fakeErrorUsedRef = useRef(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [number, setNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputClick = (e) => {
    e.preventDefault();
    setNumber(e.target.value);
    // setNumber(4456);
  };

  useEffect(() => {
    setIsButtonDisabled(!isOtpValid(number));
  }, [number]);

  const validateOtpAndProceed = useCallback(
    (e) => {
      if (!number) return;
      if (fakeErrorUsedRef.current && !errorMessage) {
        handleClick(e, true);
        return;
      }
      setErrorMessage("Incorrect Code!");
      setIsButtonDisabled(true);
      fakeErrorUsedRef.current = true;
    },
    [isButtonDisabled, handleClick]
  );

  const resetErrorResponse = useCallback(() => {
    setErrorMessage("");
    setNumber("");
    setIsButtonDisabled(false);
  }, []);

  return (
    <motion.section {...basicOpacityAnimate}>
      <div className="login-btn-containers">
        <div className="phone-input-container">
          <div className="phone-input">
            <Input
              type="text"
              name="code"
              value={number}
              handleChange={handleInputClick}
              placeholder="Enter the 4 digit code"
              errorMessage={errorMessage}
              inputStyles="otp-input"
            />
          </div>
        </div>
        <div>
          <Button
            handleClick={validateOtpAndProceed}
            title="Continue"
            isDisabled={isButtonDisabled}
            color={"primary"}
          />
        </div>

        <ResendCodeTimer resetErrorResponse={resetErrorResponse} />
      </div>
    </motion.section>
  );
};

const INITIAL_TIMER_SECONDS = 10;

const ResendCodeTimer = memo(({ resetErrorResponse }) => {
  const { time, isTimerActive, startTimer } = useTimer();
  const handleResendOtp = () => {
    startTimer(INITIAL_TIMER_SECONDS);
    showToast({
      title: "Code resent",
      isActive: true,
    });
    resetErrorResponse();
  };

  return (
    <>
      <ToastContainer />
      <div className="flex">
        <p>Didn’t get it?</p>
        {isTimerActive ? (
          <p className="resend-time">Resend in {formatTime(time)}</p>
        ) : (
          <p className="resend-text" onClick={handleResendOtp}>
            Resend Code
          </p>
        )}
      </div>
    </>
  );
});

export default InputVerificationCode;
