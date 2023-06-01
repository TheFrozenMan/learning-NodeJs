const Product = require('../models/product') ;
exports.getAddProduct = (req, res, next) => {
  res.render('add-product',
    {
      pageTitle: 'add-product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      addproductActive: true
    })
};


exports.postNewProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};



exports.getProuducts = (req, res, next) => {
  const products = Product.fatchAll((products)=>{
    res.render('shop', {
      prods: products,
      pageTitle: 'shop',
      path: '/',
      hadProdacts: products.length > 0,
      shopActive: true,
      productCSS: true,
    });
  });
 
};