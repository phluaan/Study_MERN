import React, { useEffect, useState } from "react";
import { searchProductsApi } from "../util/api";
import "../styles/ProductListStyle.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // filter state
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const categories = ["", "Điện thoại", "Laptop", "Tablet", "Phụ kiện"];
  const [brand, setBrand] = useState("");
  const brands = [
    "", 
    "Apple", "Samsung", "Xiaomi", "Oppo", "Google", "Sony", "Vivo", "Realme",
    "Dell", "HP", "Asus", "Lenovo", "MSI", "Acer", "Razer", "Microsoft", "Huawei",
    "Logitech", "Keychron", "JBL", "Anker", "Baseus", "Sandisk"
  ];
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const discounts = ["", "10", "20", "30", "50"];
  const [minViews, setMinViews] = useState("");
  const viewsOptions = ["", "100", "500", "1000", "5000"];

  // reset khi filter thay đổi
  useEffect(() => {
    setProducts([]);
    setPage(1);
    setHasMore(true);
  }, [keyword, category, brand, minPrice, maxPrice, discount, minViews]);

  useEffect(() => {
    loadProducts();
    // eslint-disable-next-line
  }, [page, keyword, category, brand, minPrice, maxPrice, discount, minViews]);

  const loadProducts = async () => {
    try {
      const data = await searchProductsApi({
        keyword,
        category,
        brand,
        minPrice: minPrice || undefined,
        maxPrice: maxPrice || undefined,
        discount: discount ? Number(discount) : undefined,
        minViews: minViews ? Number(minViews) : undefined,
        page,
        limit: 6,
      });

      if (data && Array.isArray(data.products)) {
        setProducts((prev) => [...prev, ...data.products]);
        if (page >= data.totalPages) setHasMore(false);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.error("Lỗi khi load sản phẩm:", err);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 10 >=
      document.documentElement.scrollHeight
    ) {
      if (hasMore) setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="product-container">
      <h2 className="title">Danh sách sản phẩm</h2>

      {/* Filter box */}
      <div className="filter-box">
        <div className="filter-bar">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <input
            type="number"
            placeholder="Giá từ"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Giá đến"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />

          {/* Dropdown discount */}
          <select value={discount} onChange={(e) => setDiscount(e.target.value)}>
            <option value="">Khuyến mãi</option>
            {discounts.map((d) => (
              <option key={d} value={d}>
                {d ? `Từ ${d}%` : "Tất cả"}
              </option>
            ))}
          </select>

          {/* Dropdown views */}
          <select value={minViews} onChange={(e) => setMinViews(e.target.value)}>
            <option value="">Lượt xem</option>
            {viewsOptions.map((v) => (
              <option key={v} value={v}>
                {v ? `Từ ${v} views` : "Tất cả"}
              </option>
            ))}
          </select>

          {/* Dropdown category */}
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c || "Danh mục"}
              </option>
            ))}
          </select>

          {/* Dropdown brand */}
          <select value={brand} onChange={(e) => setBrand(e.target.value)}>
            {brands.map((b) => (
              <option key={b} value={b}>
                {b || "Thương hiệu"}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid sản phẩm */}
      <div className="product-grid">
        {products.map((p) => (
          <div key={p._id || p.id} className="product-card">
            <div className="product-image">
              <img
                src={p.image}
                alt={p.name}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/400x300?text=No+Image";
                  e.target.alt = "Image not available";
                }}
              />
            </div>

            <div className="product-info">
              <h3>{p.name}</h3>
              <p className="description">{p.description}</p>

              <div className="price-row">
                <span className="price">
                  {p.price?.toLocaleString()} VND
                </span>
                <span className="category">{p.category}</span>
              </div>

              <div className="extra-info">
                <span>Brand: {p.brand || "N/A"}</span>
                <span>Stock: {p.stock}</span>
                <span>Discount: {p.discount}%</span>
                <span>Views: {p.views}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!hasMore && <p className="end-text">🎉 Đã tải hết sản phẩm</p>}
    </div>
  );
};

export default ProductList;
