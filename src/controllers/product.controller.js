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
        const name = req.body.name;
        const desc = req.body.desc;
       
        const imageURL = req.body.imageURL;
        let error=[];
        if(!name || name.ptrim()===''){
            error.push('Name is required');
        }
        if(!desc || desc.trim()===''){
            error.push('Description is required');
        }
        try{
            let URL = new URL(imageURL);
        }
        catch(err){
            error.push('Image URL is not valid');
        }

        if(error.length > 0) {
            return res.render('new-product', {errorMessage :error}
        )
    };



       ProductModel.add(req.body);
       let products = ProductModel.getProducts();
       console.log(products);
        return res.render('products', { key: products });
    }

}

