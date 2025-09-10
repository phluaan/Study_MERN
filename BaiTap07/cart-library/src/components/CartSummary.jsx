import React from "react";
import Card from "./Card";
import Button from "./Button";

const CartSummary = ({ subtotal, delivery, total, onCheckout }) => {
  return (
    <Card>
      <h2>Order Summary</h2>
      <div className="summary-line">
        <span>Subtotal</span>
        <span>{subtotal.toLocaleString()}₫</span>
      </div>
      <div className="summary-line">
        <span>Shipping fee</span>
        <span>{delivery.toLocaleString()}₫</span>
      </div>
      <div className="summary-line total">
        <span>Total</span>
        <span>{total.toLocaleString()}₫</span>
      </div>
      <Button variant="primary" onClick={onCheckout}>
        Proceed to Checkout
      </Button>
    </Card>
  );
};

export default CartSummary;