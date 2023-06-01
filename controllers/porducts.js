const products =[ ]; 

exports.getAddProduct= (req, res, next) => {
    res.render('add-product',
    {
      pageTitle:'add-product',
      path :'/admin/add-product',
      formsCSS : true ,
      productCSS : true ,
      addproductActive : true })
  };


  exports.postNewProduct= (req, res, next) => {
    console.log(req.body);
    products.push({title:req.body.title})
    res.redirect('/');
  };



  exports.getProuducts= (req, res, next) => {
    res.render('shop',{prods:products ,
       pageTitle: 'shop' ,
        path :'/' ,
         hadProdacts: products.length> 0 , 
         shopActive : true ,
         productCSS: true ,
         }  );
  };