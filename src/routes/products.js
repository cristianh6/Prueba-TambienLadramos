const express = require('express');
const router = express.Router();
const path = require('path');

const { cart } = require('../controllers/productController');

// /products 

router
        .get('/productCart', cart )
        /* .get('/products/:id', getByCategory ) */

module.exports = router;