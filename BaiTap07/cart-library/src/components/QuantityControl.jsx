import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Button from "./Button";

const QuantityControl = ({ value, max, min = 1, onChange }) => {
  return (
    <div className="quantity-control">
      <Button
        variant="secondary"
        disabled={value <= min}
        onClick={() => onChange(value - 1)}
      >
        <FaMinus />
      </Button>
      <span>{value}</span>
      <Button
        variant="secondary"
        disabled={value >= max}
        onClick={() => onChange(value + 1)}
      >
        <FaPlus />
      </Button>
    </div>
  );
};

export default QuantityControl;