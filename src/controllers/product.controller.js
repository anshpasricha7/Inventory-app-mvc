import path from 'path';
import ProductModel from '../models/product.model.js';


export default class ProductController{

    getProducts(req, res){
        let products = ProductModel.getProducts();

        console.log(products);

        res.render('products', { key: products }); //No need for the entire path as we did it in index.js view engine settings


        // res.sendFile(path.resolve(path.resolve(), './src/views/products.html'));


        
    }

}