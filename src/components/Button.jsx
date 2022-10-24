import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  size,
  color,
  bgColor,
  text,
  heading,
  icon,
  borderRadius,
  link,
  border1,
}) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div
        className={`text-${size} hover:drop-shadow-xl flex items-center gap-2 justify-center px-2 py-1`}
        style={{
          backgroundColor: bgColor,
          color,
          borderRadius: borderRadius,
          borderWidth: "1px",
          borderColor: border1 ? "white" : bgColor,
        }}
      >
        <p className="text-lg text-white ">{icon}</p>
        <div className="block">
          <p className="text-xs">{text}</p>
          <p className="font-semibold text-lg">{heading}</p>
        </div>
      </div>
    </a>
  );
};

export default Button;
