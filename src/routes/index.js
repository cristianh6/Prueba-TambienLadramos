const express = require('express');
const {index, productCart, products, services } = require('../controllers/indexController');
const router = express.Router();


/* GET home page. */
router.get('/', index);
router.get('/products', products);
router.get('/services', services);




module.exports = router;
