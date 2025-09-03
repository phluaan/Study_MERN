import React, { useEffect, useState } from "react";
import { getProductsByCategoryApi } from "../util/api";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [category, setCategory] = useState("Điện thoại");

  const categories = ["Điện thoại", "Laptop", "Tablet", "Phụ kiện"];

  useEffect(() => {
    // reset khi đổi category
    setProducts([]);
    setPage(1);
    setHasMore(true);
  }, [category]);

  useEffect(() => {
    loadProducts();
    // eslint-disable-next-line
  }, [page, category]);

  const loadProducts = async () => {
    try {
      const data = await getProductsByCategoryApi(category, page, 6);
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
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Danh sách sản phẩm
      </h2>

      {/* Dropdown chọn category */}
      <div className="flex justify-center mb-6">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded-lg px-4 py-2 shadow focus:ring-2 focus:ring-blue-400"
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Danh sách sản phẩm */}
      <div className="space-y-5">
        {products.map((p) => (
          <div
            key={p._id}
            className="flex items-center bg-white rounded-xl shadow-md hover:shadow-xl transition p-5"
          >
            {/* Ảnh sản phẩm */}
            <div className="w-40 h-40 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Thông tin sản phẩm */}
            <div className="ml-6 flex-1">
              <h3 className="font-bold text-xl text-gray-800">{p.name}</h3>
              <p className="text-red-600 font-extrabold text-lg mt-1">
                {p.price.toLocaleString()} VND
              </p>
              <p className="text-base text-gray-600 mt-2 line-clamp-2">
                {p.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {!hasMore && (
        <p className="text-center text-gray-500 mt-6">
          🎉 Đã tải hết sản phẩm
        </p>
      )}
    </div>
  );
};

export default ProductList;
