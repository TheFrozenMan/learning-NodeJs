const fs = require('fs') ;
const path = require('path');
const p = path.join(
    path.dirname(process.mainModule.filename), 
    'data' ,
    'cart.json');


module.exports =  class Cart {
    static addToCart(id, productPrice) {
        //featch for previous cart 
        fs.readFile(p,(err,fileContent)=>{
            let cart = {products:[] ,totalPrice :0}
            if(!err){
              cart= JSON.parse(fileContent) ; 
            }
            // Analysis the cart => find existing products 
            const existingProductsIndix = cart.products.findIndex(
                prod=>prod.id===id
                );
                
            const existingProducts  = cart.products[existingProductsIndix] ;
            let updatedProduct ;
            // Add new products to cart / increes the quantity 
            if(existingProducts){
                updatedProduct={...existingProducts};
                updatedProduct.quantity++  ;
                cart.products= {...cart.products};
                cart.products[existingProductsIndix] =updatedProduct;

            }else {
                updatedProduct={id:id , quantity:1} ;
                cart.products = [...cart.products,updatedProduct]
            }
            cart.totalPrice=  cart.totalPrice+ +productPrice ;
             //save teh cart to the filesystem 
             fs.writeFile(p, JSON.stringify(cart), (err)=>{console.log(err)} )
        });
       
      
    }

}