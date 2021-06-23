const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
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

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express .urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
});
 
app.listen(2000);