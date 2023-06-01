const path = require('path');
const express = require('express');
const router = express.Router();
const productsController  = require ('../controllers/porducts')

router.get('/', productsController.getProuducts);

module.exports = router;

