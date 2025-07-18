import UserModel from '../models/user.model.js';
import ProductModel from '../models/product.model.js';

export default class UserController{
    getRegister(req, res){
        res.render('register');
    }
    getLogin(req, res){
        res.render('login' , { errorMessage: null });
    }
    postRegister(req, res){
        const { name, email, password } = req.body;
        UserModel.add(name, email, password);
        res.render('login' , { errorMessage: null });
        
    }
    postLogin(req, res){
        const result=UserModel.isValidUser(req.body.email, req.body.password);
        if(result){
           return  res.render('products' , {key: ProductModel.getProducts()});
        }
         res.render('login' , {errorMessage:['Invalid email or password']});

    }
}