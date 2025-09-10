import React from "react";
import { FaMinus, FaPlus, FaTimes, FaCheck } from "react-icons/fa";
import Card from "./Card";
import Button from "./Button";
import "../styles/cart.css";
import QuantityControl from "./QuantityControl";
const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <Card>
      <div className="cart-item">
        <button className="cart-remove-btn" onClick={onRemove}>
            <FaTimes />
        </button>
        <img
          src={item.product.images?.[0]}
          alt={item.product.name}
          className="cart-item-img"
        />
        <div className="cart-item-info">
          <h3>{item.product.name}</h3>
          <p>{item.product.description}</p>

          <div className="stock-status">
            {item.product.stock >= item.quantity ? (
              <span className="in-stock">
                <FaCheck /> In stock ({item.product.stock} available)
              </span>
            ) : (
              <span className="out-stock">
                <FaTimes /> Out of stock
              </span>
            )}
          </div>

          <div className="cart-item-bottom">
            <QuantityControl
              value={item.quantity}
              max={item.product.stock}
              onChange={(newQuantity) => onUpdateQuantity(newQuantity)}
            />

            <div className="cart-price">
              {item.product.salePrice ? (
                <>
                  <span className="old-price">
                    {item.product.price.toLocaleString()}₫
                  </span>
                  <span className="sale-price">
                    {item.product.salePrice.toLocaleString()}₫
                  </span>
                </>
              ) : (
                <span className="sale-price">
                  {item.product.price.toLocaleString()}₫
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CartItem;
