"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Toast from "@/components/common/Toast";
import useTimer from "@/hooks/useTimer";
import { formatTime, isOtpValid } from "@/utils/functions";
import React, { useEffect, useRef, useState } from "react";

const PhoneVerificationStep2 = ({ handleClick }) => {
  const fakeErrorUsedRef = useRef(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [number, setNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [toast, setToast] = useState();

  const { time, isTimerActive, startTimer} =
    useTimer(90); // Initialize with 90 seconds

  const handleInputClick = (e) => {
    e.preventDefault();
    // setNumber(e.target.value);
  };

  useEffect(() => {
    if (isOtpValid(number)) {
      setIsButtonDisabled(false);
      return;
    }
    setIsButtonDisabled(true);
  }, [number]);

  const handleOtpSubmit = () => {
    if (!number) return;
    if (fakeErrorUsedRef.current && !errorMessage) {
      handleClick(null, true);
      return;
    }
    setErrorMessage("Incorrect Code!");
    setIsButtonDisabled(true);
    fakeErrorUsedRef.current = true;
  };

  const handleResendOtp = () => {
    setToast({
      id: 1,
      title: "Code resent",
      timeOut: 1600,
      isActive: true,
    });
    setErrorMessage("");
    setNumber("");
    setIsButtonDisabled(false);
    startTimer();
  };

  return (
    <>
      <Toast toast={toast} setToast={setToast} />
      <div className="login-btn-containers">
        <div className="phone-input-container">
          <div className="phone-input" onClick={() => setNumber(4456)}>
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
            handleClick={handleOtpSubmit}
            title="Continue"
            isDisabled={isButtonDisabled}
            color={"primary"}
          />
        </div>
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
      </div>
    </>
  );
};

export default PhoneVerificationStep2;
