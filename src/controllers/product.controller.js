import path from 'path';
import ProductModel from '../models/product.model.js';
// import { error } from 'console';
// import { URL } from 'url';


export default class ProductController{

    getProducts(req, res){
        let products = ProductModel.getProducts();

        console.log(products) ;

        res.render('products', { key: products, userEmail: req.session.userEmail  }); //No need for the entire path as we did it in index.js view engine settings
   
    }
    getAddForm(req, res) {
       return res.render('new-product' , {errorMessage: null, userEmail: req.session.userEmail }); // Render the form to add a new product
    }
    
    AddNewProduct(req, res) {
        console.log('File received:', req.file);

        const {name, desc, price} = req.body;
        const imageURL = "images/" + req.file.filename; //file is uploaded to 'public/images/' directory
       
       ProductModel.add(name , desc, price, imageURL);
       let products = ProductModel.getProducts();
       console.log(products);
        return res.render('products', { key: products , userEmail: req.session.userEmail });
    }

    UpdateProduct(req , res, next){
        const id= req.params.id;
        const productFound =ProductModel.getProductById(id);
        console.log(id);
        console.log(productFound);

        if(productFound){
            return res.render('update_product' , {errorMessage: null , product: productFound, userEmail: req.session.userEmail }); // Render the form to update the product
        }
        else{
            res.status(401).send('Product not found');
        }

    }
    postUpdateProduct(req, res, next) {
        console.log("THis is the product that will be updated");
        console.log(req.body);
        let products = ProductModel.getProducts();
        let requiredproduct = products.find(function(product) {
            return product.id === parseInt(req.body.id);
        });
         
         requiredproduct.name = req.body.name;
         requiredproduct.desc = req.body.desc;
         requiredproduct.price = req.body.price;
         requiredproduct.imageURL = req.body.imageURL;
         
         return res.render('products'  ,{key: products, userEmail: req.session.userEmail } );

    }
    deleteProduct(req, res) {
        const id = req.params.id;
         const productFound =ProductModel.getProductById(id);
          if(!productFound){
            return res.status(401).send('Product not found');
        }
        else{
        ProductModel.delete(id);
         let products = ProductModel.getProducts();
       console.log(products);
         res.render('products', { key: products , userEmail: req.session.userEmail });
        }
    }
    logout(req, res) {
        req.session.destroy(function(err){
            if(err)
            console.log("Session ended");
        else res.redirect('/login'); // Redirect to login page after logout

        })
    }

}

