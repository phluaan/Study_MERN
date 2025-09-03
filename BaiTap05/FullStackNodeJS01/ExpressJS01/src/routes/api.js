const express = require('express');
const { createUser, handleLogin, getUser, getAccount}
    = require('../controllers/userController');
const auth = require('../middleware/auth');
const delay = require('../middleware/delay');
import { getProductsByCategory } from "../controllers/productController.js";

const routerAPI = express.Router();
routerAPI.use(auth);

routerAPI.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello from API'
    });
});
routerAPI.post('/login', handleLogin);
routerAPI.post('/user', getUser);
routerAPI.post('/register', createUser);
routerAPI.get('/account', delay, getAccount);
routerAPI.get("/products/:category", getProductsByCategory);
module.exports = routerAPI;