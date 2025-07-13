import express from 'express';
import  ProductController  from './src/controllers/product.controller.js';
import ejsLayouts from 'express-ejs-layouts';
import path from 'path';


const server= express();

//setup view engine settings
server.set('view engine', 'ejs');
server.set("views", path.join(path.resolve(),"src",'views')); 


//Using express-ejs-layouts
server.use(ejsLayouts);



const productController = new ProductController();

server.use(express.static('src/views'));
server.get('/', productController.getProducts);


server.listen(1000, () => {
  console.log('Server is running on http://localhost:1000');
});

