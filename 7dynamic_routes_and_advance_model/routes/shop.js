const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

router.get('/life', (req, res, next)=>{
   const  cart = req.session.cart || [];
    cart.push(  {
        title: 'Fluemt',
        imageUrl: 'https://www.publicdomainpictures.net/pictures/10000/velka/1-1210009435EGmE.jpg',
        description: 'nil',
        price: '23',
        id: '0.34737646061267125'
      });
    req.session.cart = cart
req.session.username = 'tosmic';
res.send(req.session.cart);
});
router.get('/lfe', (req, res, next)=>{
 
 req.session.destroy();
 res.send(res.session);
 });

module.exports = router;
