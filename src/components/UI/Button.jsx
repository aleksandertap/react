import React from "react";
import './Button.css'

const Button = (props) => {
  return (
    <button
      className="button"
      type={props.type || "button"}
      onClick={props.onClick}
    ></button>
  );
};

export default Button;
