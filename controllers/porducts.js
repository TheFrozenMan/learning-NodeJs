 exports.getAddProduct= (req, res, next) => {
    res.render('add-product',
    {
      pageTitle:'add-product',
      path :'/admin/add-product',
      formsCSS : true ,
      productCSS : true ,
      addproductActive : true })
  }