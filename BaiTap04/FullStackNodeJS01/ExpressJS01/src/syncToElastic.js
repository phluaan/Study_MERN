const mongoose = require("mongoose");
const esClient = require("./config/elastic");
const Product = require("./models/Product");

const indexProduct = async (product) => {
  await esClient.index({
    index: "products",
    id: product._id.toString(),
    body: {
      name: product.name,
      category: product.category,
      brand: product.brand,
      price: product.price,
      discount: product.discount,
      views: product.views,
      stock: product.stock,
      description: product.description,
      image: product.image,
    },
  });
};

(async () => {
  try {
    // 1. Kết nối MongoDB
    await mongoose.connect("mongodb://localhost:27017/fullstack02");

    console.log("✅ Kết nối MongoDB thành công");

    // 2. Lấy tất cả sản phẩm từ Mongo
    const products = await Product.find();
    console.log(`🔄 Đang sync ${products.length} sản phẩm...`);

    // 3. Đẩy từng sản phẩm vào Elasticsearch
    for (const p of products) {
      await indexProduct(p);
    }

    console.log("🎉 Sync xong tất cả sản phẩm!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Lỗi sync:", err);
    process.exit(1);
  }
})();
