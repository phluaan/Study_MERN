const productService = require("../services/productService");

const searchProducts = async (req, res) => {
  try {
    const data = await productService.searchProducts(req.query);
    res.json(data);
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ message: "Search error", error: error.message });
  }
};

module.exports = {
  searchProducts,
};
