const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const adminData = require('./routes/admin')
const shopRoute = require('./routes/shops')
console.log('jdl')

const app = express();
app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin', adminData.routes);

app.use(shopRoute);

app.use((req, res, next) => {
  res.status(404).render('404',{pageTitle:"Error Page"});

});

app.listen(2343);
