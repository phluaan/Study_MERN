import React from "react";
import "../styles/cart.css";

const Button = ({ children, onClick, disabled, variant = "primary" }) => {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
