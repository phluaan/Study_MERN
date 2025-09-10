// ProductListPage.jsx
import React from "react";
import Card from "./Card";
import Button from "./Button";

const ProductListPage = ({ products, items, setItems, onViewCart }) => {
  const addToCart = (product) => {
    setItems((prev) => {
      const exist = prev.find((i) => i.product._id === product._id);
      if (exist) {
        return prev.map((i) =>
          i.product._id === product._id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  return (
    <div className="product-list">
        <h2>Danh sách sản phẩm</h2>
        <div className="products-grid">
            {products.map((p) => (
            <div className="product-card" key={p._id}>
                <img src={p.images[0]} alt={p.name} className="product-img" />
                <div className="product-info">
                <h3>{p.name}</h3>
                <p className="desc">{p.description}</p>
                <p className="price">
                    {p.salePrice && (
                    <span className="old-price">
                        {p.price.toLocaleString()}₫
                    </span>
                    )}
                    <b className="sale-price">
                    {(p.salePrice || p.price).toLocaleString()}₫
                    </b>
                </p>
                <Button onClick={() => addToCart(p)}>Thêm vào giỏ</Button>
                </div>
            </div>
            ))}
        </div>

        <div className="view-cart">
            <Button variant="primary" onClick={onViewCart}>
            Xem giỏ hàng ({items.length})
            </Button>
        </div>
        </div>

  );
};

export default ProductListPage;
