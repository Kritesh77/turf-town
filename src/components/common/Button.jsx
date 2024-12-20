import Image from "next/image";
import React from "react";

const Button = ({ title, icon, handleClick, isDisabled, color, name }) => {
  return (
    <button
      onClick={handleClick}
      name={name}
      className={`btn flex-center
        ${isDisabled ? "btn-disabled" : "btn-shadow"} 
        ${color ? `btn-${color}` : ""}`}
    >
      {icon && (
        <div className="btn-icon relative">
          <Image
            src={icon.src}
            alt={icon.alt}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      )}
      <div className="btn-title-container">
        <p className="btn-title">{title}</p>
      </div>
    </button>
  );
};

export default Button;
