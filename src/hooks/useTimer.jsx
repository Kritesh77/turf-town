"use client";
import { useState, useEffect } from "react";

const useTimer = (initialTime = 60) => {
  const [time, setTime] = useState(initialTime); // Timer value
  const [isTimerActive, setIsActive] = useState(false); // Active state

  useEffect(() => {
    let timer;
    if (isTimerActive && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1); // Decrease time
      }, 1000);
    } else if (time === 0) {
      setIsActive(false); // Stop when time hits 0
    }
    return () => clearInterval(timer); // Cleanup
  }, [isTimerActive, time]);

  const startTimer = () => setIsActive(true);
  const stopTimer = () => setIsActive(false);
  const resetTimer = () => {
    setIsActive(false);
    setTime(initialTime);
  };

  return { time, isTimerActive, startTimer, stopTimer, resetTimer };
};

export default useTimer;
