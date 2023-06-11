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


// /checkout => GET
router.get('/checkout', shopController.getCheckout);


// /orders => GET
router.get('/orders',shopController.getTheCart) ;

// routig for the product
// /cart => GET
router.get('/product',shopController.getTheProductDeatiles) ; 



router.get('/products', shopController.getProducts);

router.get('/products/:productId',shopController.getProuduct) ; 

module.exports = router;

