const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// => adding a engin 
app.set('view engine','ejs');
// => show the place of the engen 
app.set('views' , 'views' );

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const error = require('./controllers/error')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(error.getError404);


app.listen(3000);
