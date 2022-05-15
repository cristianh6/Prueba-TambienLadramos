const res = require('express/lib/response');
const fs = require('fs');
const path = require('path')

const products = require('../data/products.json');

/* const productsFilePath = path.join(__dirname, '../src/data/products.json'); */

// guardo en productsfilepath

/* const leerProducto = () => {  
	const productsJson = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); //recibe el array de productos	   
	return products;							//sobreescribe el json
}  */

/* const productoGuardado = (productsJson) => fs.writeFileSync(productsFilePath, JSON.stringify(productsJson, null, 3));  */

module.exports = {
    
    listProducts : (req, res) => {    
        return res.send('/', {
            products
        })
    }
}