const path = require('path');
const express = require('express');
const router = express.Router();
const shopController  = require ('../controllers/shop')

// routing for the mean page 
// / => GET
router.get('/', shopController.getIndex);

// routing for the cart  
// /cart => GET
router.get('/cart',shopController.getTheCart) ;

router.get('/checkout', shopController.getCheckout);

router.get('/orders',shopController.getTheCart) ;

// routig for the product
// /cart => GET
router.get('/product',shopController.getTheProductDeatiles)

module.exports = router;

