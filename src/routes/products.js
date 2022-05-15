const express = require('express');
const router = express.Router();
const path = require('path');
const { listProducts } = require('../controllers/productController');

// /products 

router.get('/', listProducts);


module.exports = router;