export default class UserModel{
    constructor(id, name, email , password){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;   
    }
    static add(name, email, password) {
        const newUser = new UserModel(users.length + 1 , name, email, password);
        // Here you would typically save the user to a database
        users.push(newUser);

    }
    static isValidUser(email, password) {
        const result  = users.find(function(user){
            return user.email === email && user.password === password;
        });
        if(result){
            return true;
        }
        return false;

    }
}
var users = [];