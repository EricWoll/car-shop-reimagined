const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const env = require('dotenv').config();
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const DB = require('./models');
const static = require('./routes/static');
const JWT = require('./utilities/jwtToken');
const GenHTML = require('./utilities/generateHTML');

/*******************************
 * View Engine and Templates *
 *******************************/
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set(expressLayouts);
app.set('layout', './layouts/layout');

/*************************
 * Middleware *
 **************************/
// Change out for Mongoose
// app.use(
//     session({
//         store: new (require('connect-pg-simple')(session))({
//             createTableIfMissing: true,
//             pool,
//         }),
//         secret: process.env.SESSION_SECRET,
//         resave: true,
//         saveUninitialized: true,
//         name: 'sessionId',
//     })
// );
app.use(
    cors({
        methods: ['POST', 'PUT', 'GET', 'DELETE'],
        origin: '*',
        allowedHeaders: [
            'Origin',
            'X-Requested-With',
            'Content-Type',
            'Accept',
            'Z-Key',
            'Authorization',
        ],
    })
);
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Express Messages
app.use(require('connect-flash')());
app.use((req, res, next) => {
    res.locals.messages = require('express-messages')(req, res);
    next();
});

// Cookies
app.use(cookieParser());

//JWT
app.use(JWT.checkToken);

/*************************
 * Routes *
 *************************/
// 'public' folder routes for ejs
app.use(static);
app.use('/', require('./routes'));

/*************************
 * Express Error Handler *
 *************************/
app.use(async (error, req, res, next) => {
    let nav = await GenHTML.nav();
    console.error(`Error at: "${req.originalUrl}": ${err.message}`);
    if (error.status == 404) {
        message = error.message;
    } else {
        message = 'Oh no! There was a crash. Maybe try a different route?';
    }
    res.render('errors/error', {
        title: error.status || 'Server Error',
        message,
        nav,
    });
});
/*****************************
 * Local Server Information *
 *****************************/
const PORT = process.env.PORT;
const HOST = process.env.HOST;

// Db Connection
DB.mongoose
    .connect(DB.uri)
    .then(() => {
        console.log('Connected to databse');
    })
    .catch((error) => {
        console.log('Cannot connect to Database...', error);
        process.exit();
    });
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}: ${HOST}`);
});
