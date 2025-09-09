const express = require("express");
const { createUser, handleLogin, getUser, getAccount } = require("../controllers/userController");
const { searchProducts } = require("../controllers/productController");
const auth = require("../middleware/auth");
const delay = require("../middleware/delay");

const routerAPI = express.Router();
routerAPI.use(auth);

routerAPI.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from API" });
});

routerAPI.post("/login", handleLogin);
routerAPI.post("/user", getUser);
routerAPI.post("/register", createUser);
routerAPI.get("/account", delay, getAccount);

routerAPI.get("/products/search", searchProducts);

module.exports = routerAPI;
