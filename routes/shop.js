const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const adminData = require('./admin') 

router.get('/', (req, res, next) => {

  const products = adminData.product;
  res.render('shop',{prods:products ,
     pageTitle: 'shop' ,
      path :'/' ,
       hadProdacts: products.length> 0 , 
       shopActive : true ,
       productCSS: true ,
       }  );
});

module.exports = router;

