const express = require('express');
const router = express.Router();
const path = require('path');

const { products, cart } = require('../controllers/productController');

// /products 

router
        /* .get('/', products )  */
         .get('/productCart', cart ) 
        

module.exports = router;