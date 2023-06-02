const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();
const productsController =require('../controllers/porducts')

const product =[];

// /admin/add-product => GET
router.get('/add-product',productsController.getAddProduct );

// /admin/add-product => POST
router.post('/add-product',productsController.postNewProduct );

// /admin/products=> GET
router.get('/products',productsController.getAdminProuctList)
module.exports = router;