export const isPhoneNumberValid = (number) => {
  const phoneRegex = /^[+\d]?(?:\d{10,15}|\(\d{3}\)\s?\d{3}-\d{4})$/;
  return phoneRegex.test(number);
};

export const isOtpValid = (number) => {
  const otpRegex = /^\d{4}$/;
  return otpRegex.test(number);
};

export const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;
};
