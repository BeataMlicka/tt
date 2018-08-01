const JWT = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/keys');
const User = require('../models/user');


signToken = user => {
    return JWT.sign({
        iss: 'SiteName', //issue
        sub: user.id, //subject //user.id or user._id
        iat: new Date().getTime(), //issue at //current time
        exp: new Date().setDate(new Date().getDate() + 1) //current time + one day ahead
    }, JWT_SECRET); //first arg - payload, second - secret, provate key
}

module.exports = {

    signUp: async (req, res, next) => {
        //username & email & password 
        //console.log('Sign Up working!!');

        const { username, email, password } = req.value.body;

        //check if there is a user with the same email
        const foundUser = User.findOne({ local: { email }});

        if(foundUser){
            return res.status(403);
        }

        const newUser = new User({
            method: 'local',
            local: {
                username: username,
                email: email,
                password: password
            }
        });

        await newUser.save();

        //generate the token
        const token = signToken(newUser);

        //respond with token
        res.status(200).json({ token });
    },

    signIn: async (req, res, next) => {
        //generate token
        const token = signToken(req.user);
        res.status(200).json({ token });
    },

    access: async (req, res, next) => {
        res.redirect('/');
        console.log('Access working!!');
    }
}