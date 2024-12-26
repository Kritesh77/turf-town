"use client";
import { useState, useEffect } from "react";

const useTimer = (initialTime = 90) => {
  const [time, setTime] = useState(initialTime);
  const [isTimerActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isTimerActive && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      resetTimer(false);
    }
    return () => clearInterval(timer); // Cleanup
  }, [isTimerActive, time]);

  const startTimer = (time) => setIsActive(true);
  const stopTimer = () => setIsActive(false);
  const resetTimer = () => {
    setIsActive(false);
    setTime(initialTime);
  };

  return { time, isTimerActive, startTimer, stopTimer, resetTimer };
};

export default useTimer;
