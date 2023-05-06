const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const adminData = require('./admin') 

// router.get('/', (req, res, next) => {
//   console.log(adminData.product)
//   res.sendFile(path.join(rootDir, 'views', 'shop.html'));
// });


router.get('/', (req, res, next) => {

  const products = adminData.product
  res.render('shop',{prods:products , DocumentTitle : 'shop '});
});


module.exports = router;


////////////// hi 