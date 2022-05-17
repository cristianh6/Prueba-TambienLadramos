const res = require('express/lib/response');
const fs = require('fs');
const path = require('path')

const categories = require('../data/categories')

const productsFilePath = path.join(__dirname, '../data/products.json')
const productsJSON = fs.readFileSync(productsFilePath, 'utf-8');

const products = JSON.parse(productsJSON)

module.exports = {
    
    /* products : (req, res) => {  
        const leerProductos = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','products.json')));  

        const perros = leerProductos.filter(product => product.category === 1);
        const gatos = leerProductos.filter(product => product.category === 2);
    
        return res.render('products', {
            leerProductos : categories
        })
    }, */
    add : (req,res) => {
        return res.render('productAdd',{
            categories
        })
    },

    cart : (req, res) => {    

        const leerProductos = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','products.json')));  

        const perros = leerProductos.filter(product => product.category === 1);
        const gatos = leerProductos.filter(product => product.category === 2);

        return res.render('productCart', {
            perros,
            gatos
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








// guardo en productsfilepath
/* const productoGuardado = (productsJson) => fs.writeFileSync(productsFilePath, JSON.stringify(productsJson, null, 3));  */