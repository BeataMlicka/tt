const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

require('./models/user');
require('./services/passport');



//database connection
mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,
        keys: [keys.cookieKey]
    })
);

//Middlewares

app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('dev'));
app.use(bodyParser.json());

//Routes

const authRoutes = require('./routes/authRoutes');
authRoutes(app);

//app.use('/user', require('./routes/users'));

//Start the server

const PORT = process.env.PORT || 5000;
app.listen(PORT);

