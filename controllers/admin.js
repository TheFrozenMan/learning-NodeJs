const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product',
      {
        pageTitle: 'add-product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        addproductActive: true
      })
  };

  exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect('/');
  };



  exports.getProducts = (req , res , next)=> {
const product =  Product.fatchAll(product =>{
  res.render('admin/products' ,{ 
    prods: product,
    pageTitle : 'product-list' ,
    path : '/admin/products',
    hadProdacts: product.length > 0,
  })
})

   
  }

