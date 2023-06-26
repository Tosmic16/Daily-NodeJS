const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

exports.getProduct = (req, res, next) => {
prodId = req.params.productId;
Product.findById(prodId, product=>{
  res.render('shop/product-detail',{
    product : product,
    pageTitle: product.title,
    path: '/products/'+prodId,
  })
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

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.postCart = (req, res, next) => {

  const prodId = req.body.productId;
req.session.cart = req.session.cart || [];

   Product.findById(prodId, (product, cart = req.session.cart, id=prodId) => {
  const prod = cart.find(p =>  p.id === id )
    if(prod){
      prod.count = prod.count+1 ;
      console.log(prod.count);
    }
else{
  product.count = 1
  cart.push(product);
}
     console.log(cart);
     res.send('jigger')

  })

};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
