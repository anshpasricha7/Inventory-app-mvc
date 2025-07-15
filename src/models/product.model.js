export default class ProductModel {

    constructor(id, name, desc , price , imageURL){
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.imageURL = imageURL;
    } 

    static getProducts() {
        return products;
    }

    static add(productobj) {


       let newproduct = new ProductModel(
  products.length + 1,
  productobj.name,
  productobj.desc, // desc goes here
  productobj.price, // price goes here
  productobj.imageURL // no need for template literal
);
        products.push(newproduct);
    }

    static getProductById(id){
        return products.find((product) => product.id === parseInt(id));
    }
    static  delete(id) {
        const index = products.findIndex((product) => product.id === parseInt(id));
        
            products.splice(index, 1);
        
    }
    
}

var products = [
    new ProductModel(1, 'Atomic Habits', 'Description for product 1', 100, 'https://m.media-amazon.com/images/I/81F90H7hnML._AC_UY327_FMwebp_QL65_.jpg'),
    new ProductModel(2, 'Rich Dad Poor Dad', 'Description for product 2',   200, 'https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UY327_FMwebp_QL65_.jpg'),
    new ProductModel(3, 'The Subtle Art Of Not Giving A F*ck', 'Description for product 3', 300, 'https://m.media-amazon.com/images/I/71t4GuxLCuL._AC_UY327_FMwebp_QL65_.jpg'),
   ];

   console.log(products);