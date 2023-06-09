const Product = require('../models/product') ;

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


exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
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



//  the controller that all the route to access to the cart 
exports.getTheOrders = (req , res , next)=> {
  res.render(
    'shop/orders' , {
      pageTitle: 'your orders',
      path: '/orders',
    }
  )
}


exports.getTheProductDeatiles = (req,res, next) =>{
  res.render('shop/product-details',
  {
    pageTitle :' product Deatiales',
    path : '/product'
  })
}


