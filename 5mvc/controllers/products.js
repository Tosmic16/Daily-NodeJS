const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product',{
      pageTitle: "Add Products to Shop",
       path: '/admin/add-product',
      formsCSS: true,
      productCSS:true,
      activeAddproduct:true
      });
      }

      exports.postAddProducts = (req, res, next) => {
        const product = new Product(req.body.title);
        product.save();
         res.redirect('/');
     }

     exports.getProducts = (req, res, next) => {
      const products = Product.fetchAll(products=>{
        res.render('shop',{
        prods: products,
        pageTitle : "My Shop, All Day, Any Day.", 
        path: '/',
        hasProducts: products.length > 0,
        productCSS:true,
        activeShop:true
      });
    
    
    });
  }