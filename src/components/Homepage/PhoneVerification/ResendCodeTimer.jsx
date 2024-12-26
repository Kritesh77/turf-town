import useTimer from "@/hooks/useTimer";
import { formatTime } from "@/utils/functions";
import React, {  useEffect, useState } from "react";

const ResendCodeTimer = () => {
  const [toast, setToast] = useState();
  const { time, isTimerActive, startTimer } = useTimer(10); // Initialize with 90 seconds

  useEffect(() => {
    console.log(time, isTimerActive);
  }, [time, isTimerActive, startTimer]);

  const handleResendOtp = () => {
    startTimer(10);
    setToast({
      id: 1,
      title: "Code resent",
      timeOut: 1600,
      isActive: true,
    });
  };
  return (
    <>
      {/* <Toast toast={toast} setToast={setToast} /> */}
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
};

export default React.memo(ResendCodeTimer);
