const path = require('path');
const express = require('express');
const router = express.Router();
const productsController  = require ('../controllers/porducts')

// routing for the mean page 
// / => GET
router.get('/', productsController.getProuducts);

// routing for the cart  
// /cart => GET
router.get('/cart',productsController.getTheCart) ;


// routig for the product
// /cart => GET
router.get('/product',productsController.getTheProductDeatiles)

module.exports = router;

