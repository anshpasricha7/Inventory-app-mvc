import express from 'express';
import  ProductController  from './src/controllers/product.controller.js';
import ejsLayouts from 'express-ejs-layouts';
import path from 'path';
import validateRequest from   './src/middlewares/validation.middleware.js';
import { uploadFile } from './src/middlewares/image-upload.middleware.js';
import UserController from './src/controllers/user.controller.js';

const server= express();

//parse form data
server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));

//setup view engine settings
server.set('view engine', 'ejs');
server.set("views", path.join(path.resolve(),"src","views")); 


//Using express-ejs-layouts
server.use(ejsLayouts);



const productController = new ProductController();


server.get('/', productController.getProducts);
server.get(`/new` , productController.getAddForm);
server.post('/' ,uploadFile.single('imageURL'),validateRequest ,  productController.AddNewProduct);
server.use(express.static('src/views'));
server.get('/update_product/:id', productController.UpdateProduct);
server.post('/updatevalues' , productController.postUpdateProduct);
server.post('/delete_product/:id', productController.deleteProduct);

const userController = new UserController();
server.get('/register' , userController.getRegister);
server.get('/login' , userController.getLogin); 
server.post('/register' , userController.postRegister);
server.post('/login', userController.postLogin);


server.listen(1000, () => {
  console.log('Server is running on http://localhost:1000');
});

