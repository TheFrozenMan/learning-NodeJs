const path = require('path');
const express = require('express');
const router = express.Router();
const productsController  = require ('../controllers/porducts')

// routing for the mean page 
router.get('/', productsController.getProuducts);

// routing for the cart 
router.get('/cart',productsController.getTheCart) ;


// routig for the product

router.get('/product',productsController.getTheProductDeatiles)

module.exports = router;

