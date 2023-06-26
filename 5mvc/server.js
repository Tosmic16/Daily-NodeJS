const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const adminRoute = require('./routes/admin')
const shopRoute = require('./routes/shops')
const errorController = require('./controllers/error.js')
console.log('jdl')

const app = express();
app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin', adminRoute.routes);

app.use(shopRoute);

app.use(errorController.get404);

app.listen(2026);
