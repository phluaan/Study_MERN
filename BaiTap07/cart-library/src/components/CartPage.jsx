import React from "react";
import CartItem from "./CartItem";
import Card from "./Card";
import Button from "./Button";
import "../styles/cart.css";
import CartSummary from "./CartSummary";
const CartPage = ({ items = [], setItems, loading, onCheckout }) => {
  // Hàm cập nhật số lượng
  const updateQuantity = (id, newQuantity) => {
    setItems((prev) =>
      prev.map((i) =>
        i.product._id === id ? { ...i, quantity: newQuantity } : i
      )
    );
  };

  // Hàm xóa item
  const removeItem = (id) => {
    setItems((prev) => prev.filter((i) => i.product._id !== id));
  };

  const subtotal = items.reduce(
    (total, item) =>
      total + (item.product.salePrice || item.product.price) * item.quantity,
    0
  );
  const delivery = 0;
  const total = subtotal + delivery;

  if (loading) return <p className="loading">Đang tải...</p>;

  if (items.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Giỏ hàng trống</h2>
        <p>Bạn chưa có sản phẩm nào trong giỏ.</p>
        <Button variant="primary">Tiếp tục mua sắm</Button>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-items">
        {items.map((item) => (
          <CartItem
            key={item.product._id}
            item={item}
            onUpdateQuantity={(newQuantity) =>
              updateQuantity(item.product._id, newQuantity)
            }
            onRemove={() => removeItem(item.product._id)}
          />
        ))}
      </div>
      <div className="cart-summary">
        <CartSummary
          subtotal={subtotal}
          delivery={delivery}
          total={total}
          onCheckout={onCheckout}
        />
      </div>
    </div>
  );
};

export default CartPage;
