const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
//pool for the connection to the server pool 
const errorController = require('./controllers/error');
const sequelize= require('./util/database') ; 

const app = express();

// db.execute('SELECT * FROM products').then( result =>{ 
//     {console.log(result) ; }
// }).catch(err=> {console.error(err) ;} ); 


// db.execute('SELECT * FROM products').then( result =>{
//     console.log(result)
// }).catch( err=>{ console.error(err)})
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);


sequelize.sync().then(result=>{
    app.listen(3000);
        })
    .catch(err=>{console.error(err)});

