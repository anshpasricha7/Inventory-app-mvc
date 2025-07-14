import path from 'path';
import ProductModel from '../models/product.model.js';
// import { error } from 'console';
// import { URL } from 'url';


export default class ProductController{

    getProducts(req, res){
        let products = ProductModel.getProducts();

        console.log(products) ;

        res.render('products', { key: products }); //No need for the entire path as we did it in index.js view engine settings
   
    }
    getAddForm(req, res) {
       return res.render('new-product' , {errorMessage: null}); // Render the form to add a new product
    }
    
    AddNewProduct(req, res) {
        


       ProductModel.add(req.body);
       let products = ProductModel.getProducts();
       console.log(products);
        return res.render('products', { key: products });
    }

}

