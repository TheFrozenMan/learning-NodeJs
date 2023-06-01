const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();
const productsControler =require('../controllers/porducts')

const product =[];

// /admin/add-product => GET
router.get('/add-product',productsControler.getAddProduct );

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  product.push({title:req.body.title})
  res.redirect('/');
});



exports.router = router;
exports.product = product;