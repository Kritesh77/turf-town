import Image from "next/image";
import React from "react";

const Button = ({ title, icon, handleClick }) => {
  return (
    <div onClick={handleClick} className="btn-primary">
      <div className="btn-icon relative">
        <Image
          src={icon.src}
          alt={icon.alt}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div>{title}</div>
    </div>
  );
};

export default Button;
