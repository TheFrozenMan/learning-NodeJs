const proudcts = [];

module.exports = class  Product {
    constructor(titile) {
        this.titile = titile;
    }

    save(){
    proudcts.push(this);
    }
    
    static fatchAll(){
        return proudcts ;
    }
}