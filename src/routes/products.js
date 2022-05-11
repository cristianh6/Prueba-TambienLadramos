const express = require('express');
const { products, cart } = require('../../controllers/productController');
const router = express.Router();

router.get('/', products);
router.get('/productCart', cart);