const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    description: String,
    image: String,

    discount: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    stock: { type: Number, default: 0 },
    brand: { type: String },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
