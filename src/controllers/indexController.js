const fs = require('fs');
const path = require('path')
const destacados = require('../data/products.json');


module.exports = {
    index : (req, res) => res.render ('index'),
    products : (req, res) => res.render('products'),
    productCart : (req, res) => res.render('productCart'),
    services : (req, res) => res.render('services')
}