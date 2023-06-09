const fs = require('fs') ;
const path = require('path');
const proudcts = [];
const p = path.join(
    path.dirname(process.mainModule.filename), 
    'data' ,
    'products.json');

const getProductFormFile = cb =>{
 
    fs.readFile(p,(err,fileContent)=>{
        if(err){
            // return [];
          return  cb([]);
        }else{
            // return JSON.parse(fileContent);
            return  cb(JSON.parse(fileContent))
        }
        
    })
}
module.exports = class  Product {
    constructor(title , imageUrl ,description , price ) {
        this.title = title;
        this.imageUrl= imageUrl ;
        this.description =description ;
        this.price = price ;
    }
//
    save(){
        getProductFormFile(proudcts => {
            proudcts.push(this);
            fs.writeFile(p, JSON.stringify(proudcts), err=>{
            console.log(err);
        });
        });
       
    
    }
    
    static fatchAll(cb){
        getProductFormFile(cb);
    }
}