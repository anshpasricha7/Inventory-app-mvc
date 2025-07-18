import UserModel from '../models/user.model.js';
import ProductModel from '../models/product.model.js';

export default class UserController{
    getRegister(req, res){
        res.render('register');
    }
    getLogin(req, res){
        res.render('login' , { errorMessage: null , userEmail: req.session.userEmail });
    }
    postRegister(req, res){
        const { name, email, password } = req.body;
        UserModel.add(name, email, password);
        res.render('login' , { errorMessage: null });
        
    }
    postLogin(req, res){
        const result=UserModel.isValidUser(req.body.email, req.body.password);
        if(result){
            req.session.userEmail= req.body.email;
            console.log("Registerd email id:"+req.session.userEmail);
           return  res.render('products' , {key: ProductModel.getProducts() , userEmail: req.session.userEmail });
        }
        
        
         res.render('login' , {errorMessage:['Invalid email or password']});

    }
}