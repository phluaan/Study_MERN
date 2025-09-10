import React from "react";
import "../styles/cart.css";

const Input = ({ value, onChange, placeholder, type = "text" }) => {
  return (
    <input
      className="input"
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
