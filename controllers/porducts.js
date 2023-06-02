const Product = require('../models/product') ;
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


exports.postNewProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};


exports.getProuducts = (req, res, next) => {
  const products = Product.fatchAll((products)=>{
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'shop',
      path: '/',
      hadProdacts: products.length > 0,
      shopActive: true,
      productCSS: true,
    });
  });
 
};


//  the controller that all the route to access to the cart 
exports.getTheCart = (req , res , next)=> {
  res.render(
    'shop/cart' , {
      pageTitle: 'Cart',
      path: '/cart',
    }
  )
}


exports.getTheProductDeatiles = (req,res, next) =>{
  res.render('shop/product-details',{pageTitle :' product Deatiales', path : '/product'})
}


exports.getAdminProuctList = (req , res , next)=> {
  res.render('admin/products' ,{ 
    pageTitle : 'product-list' ,
    path : '/admin/products'
  })
}