export default class ProductModel {

    constructor(id, name, desc , price , imageURL){
        this.id = id;
        this.name = name;
        this.price = price;
        this.desc = desc;
        this.imageURL = imageURL;
    } 

    static getProducts() {
        return products;
    }
    
}
var products = [
    new ProductModel(1, 'Atomic Habits', 'Description for product 1', 100, 'https://m.media-amazon.com/images/I/81F90H7hnML._AC_UY327_FMwebp_QL65_.jpg'),
    new ProductModel(2, 'Rich Dad Poor Dad', 'Description for product 2',   200, 'https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UY327_FMwebp_QL65_.jpg'),
    new ProductModel(3, 'The Subtle Art Of Not Giving A F*ck', 'Description for product 3', 300, 'https://m.media-amazon.com/images/I/71t4GuxLCuL._AC_UY327_FMwebp_QL65_.jpg'),
    new ProductModel(4, 'The Monk Who Sold His Ferrari', 'Description for product 4',   400, 'https://m.media-amazon.com/images/I/61pZyTuNDYL._AC_UY327_FMwebp_QL65_.jpg'),
    new ProductModel(5, 'Geronimo Stilton', 'Description for product 5', 500, 'https://m.media-amazon.com/images/I/71Y5iIhav4L._AC_UY327_FMwebp_QL65_.jpg')
];