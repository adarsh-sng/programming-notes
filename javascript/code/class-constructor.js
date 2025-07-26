class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

     encrypytPass(password){
        return `${password}abc`
    }
}

const me = new User;
me.name = "Adarsh"
me.email ="kuchbhi"
me.password="secret"
console.log(me.encrypytPass(me.password))