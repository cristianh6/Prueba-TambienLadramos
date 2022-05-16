const res = require('express/lib/response');
const fs = require('fs');
const path = require('path')

const categories = require('../data/categories')





module.exports = {
    
    /* listProducts : (req, res) => {  
        const leerProductos = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','products.json')));  

        const perros = leerProductos.filter(product => product.id === 1);
    
        return res.render('products', {
            perros
        })
    }, */

    cart : (req, res) => {    

        const leerProductos = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','products.json')));  

        const perros = leerProductos.filter(product => product.name === "dog-chow");

        return res.render('productCart', {
            perros
        }
        )}
    }
    
/* ,

    getByCategory : (req,res) => {

        const {idCategory} = req.params;

        const {name, products} = categories.find(category => category.id === +idCategory);

        return res.render('products',{
            name,
            products
        })
}} */

/* const productsFilePath = path.join(__dirname, '../src/data/products.json'); */

// guardo en productsfilepath
/* const productoGuardado = (productsJson) => fs.writeFileSync(productsFilePath, JSON.stringify(productsJson, null, 3));  */