// App.jsx
import React, { useState } from "react";
import { CartPage, ProductListPage } from "../src";

function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState("products");

  const products = [
    {
        _id: "1",
        name: "iPhone 15 Pro",
        price: 30000000,
        salePrice: 28000000,
        stock: 5,
        description: "Flagship Apple 2023",
        images: [
        "https://cdn.tgdd.vn/Products/Images/42/305660/iphone-15-pro-max-white-thumbnew-600x600.jpg"
        ]
    },
    {
        _id: "2",
        name: "Samsung Galaxy S24 Ultra",
        price: 32000000,
        salePrice: 30000000,
        stock: 3,
        description: "Flagship Samsung 2024",
        images: [
        "https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-xam-1-750x500.jpg"
        ]
    },
    {
        _id: "3",
        name: "MacBook Pro M3",
        price: 45000000,
        salePrice: 42000000,
        stock: 2,
        description: "Laptop Apple M3 Pro 2024",
        images: [
        "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/318230/apple-macbook-pro-14-inch-m3-pro-2023-111124-040015-777-600x600.jpg"
        ]
    },
    {
        _id: "4",
        name: "iPad Pro M2",
        price: 28000000,
        stock: 10,
        description: "Máy tính bảng mạnh mẽ nhất của Apple",
        images: [
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/ipad-pro-13-select-202210_1_1.png"
        ]
    },
    {
        _id: "5",
        name: "Apple Watch Ultra 2",
        price: 22000000,
        stock: 7,
        description: "Đồng hồ thông minh Apple cao cấp",
        images: [
        "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7077/329168/apple-watch-ultra-2-lte-49mm-vien-titanium-day-milan-638641727211652156-750x500.jpg"
        ]
    },
    {
        _id: "6",
        name: "AirPods Pro 2",
        price: 6500000,
        stock: 15,
        description: "Tai nghe không dây chống ồn chủ động",
        images: [
        "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/2022_9_9_637983125375534995_airpods-pro-2-thong-tin-1.jpeg"
        ]
    }
    ];

  return (
    <>
      {page === "products" && (
        <ProductListPage
          products={products}
          items={items}
          setItems={setItems}
          onViewCart={() => setPage("cart")}
        />
      )}
      {page === "cart" && (
        <CartPage
          items={items}
          setItems={setItems}
          loading={false}
          onCheckout={() => alert("Thanh toán thành công!")}
        />
      )}
    </>
  );
}

export default App;
