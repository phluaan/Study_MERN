const esClient = require("../config/elastic");

const searchProducts = async ({
  keyword,
  category,
  brand,
  minPrice,
  maxPrice,
  discount,
  minViews,
  page = 1,
  limit = 10,
}) => {
  const mustQueries = [];

  // fuzzy search theo tên sản phẩm
  if (keyword) {
    mustQueries.push({
      match: {
        name: {
          query: keyword,
          fuzziness: "AUTO",
        },
      },
    });
  }

  // lọc theo category
  if (category) {
    mustQueries.push({
      match: { category },
    });
  }

  // lọc theo brand
  if (brand) {
    mustQueries.push({
      match: { brand },
    });
  }

  // lọc theo khoảng giá
  if (minPrice || maxPrice) {
    mustQueries.push({
      range: {
        price: {
          gte: minPrice ? Number(minPrice) : 0,
          lte: maxPrice ? Number(maxPrice) : 999999999,
        },
      },
    });
  }

  // lọc theo khuyến mãi
  if (discount) {
    mustQueries.push({
      range: { discount: { gte: Number(discount) } },
    });
  }

  // lọc theo lượt xem
  if (minViews) {
    mustQueries.push({
      range: { views: { gte: Number(minViews) } },
    });
  }

  const result = await esClient.search({
    index: "products",
    from: (page - 1) * limit,
    size: limit,
    query: {
      bool: { must: mustQueries },
    },
  });

  return {
    products: result.hits.hits.map((hit) => ({ id: hit._id, ...hit._source })),
    total: result.hits.total.value,
    page,
    totalPages: Math.ceil(result.hits.total.value / limit),
  };
};

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

module.exports = {
  searchProducts,
  indexProduct,
};
