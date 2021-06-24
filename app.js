const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
//const expresshbs  = require('express-handlebars');

const app = express();


// app.engine(
//     'hbs', 
//     expresshbs({
//         layoutsDir: 'views/layouts/', 
//         defaultLayout: 'main-layout', 
//         extname: 'hbs'
//     })
//         );
// app.set('view engine', 'hbs');
// app.set('view engine', 'pug');for pug template implimentation//
app.set('view engine', 'ejs');
app.set('views', 'views'); 

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express .urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
 
app.listen(2000);