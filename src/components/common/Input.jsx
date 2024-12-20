import React from "react";

const Input = ({
  type = "text",
  name,
  isRequired,
  handleChange,
  value,
  placeholder,
  errorMessage,
}) => {
  return (
    <div className={`input-container ${errorMessage ? "input-error" : ""}`}>
      <input
        type={type}
        id="phone"
        value={value}
        name={name}
        className="input"
        required={isRequired}
        onChange={handleChange}
        placeholder={placeholder}
        autoComplete={"off"}
      />
      {errorMessage && <p className="input-error-message">{errorMessage}</p>}
    </div>
  );
};

export default Input;
