const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('user');

//JSON WEB TOKENS STRATEGY
passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: keys.JWT_SECRET
}, async(payload, done) => {
    try {
        // Find the user specified in token
        const user = await User.findById(payload.sub);
        // If user doesn't exists, handle it
        if (!user) {
            return done(null, false);
        }
        // Otherwise, return the user
        done(null, user);
    } catch (error) {
        done(error, false);
    }
}));


// LOCAL STRATEGY

passport.use(new LocalStrategy({
    usernameField: 'email'
}, async(email, password, done) => {
    try {
        // Find the user given the email
        const user = await User.findOne({ "local.email": email });

        // If not, handle it
        if (!user) {
            console.log('nie ma takiego użytkownika');
            return done(null, false);
        }
        
        // Check if the password is correct
        const isMatch = await user.isValidPassword(password);

        // If not, handle it
        if (!isMatch) {
            return done(null, false);
        }
        // Otherwise, return the user
        done(null, user);
    } catch (error) {
        done(error, false);
    }
}));


passport.serializeUser((user, done) => {
    done(null, user.id);  //id generate authomaticly by mongoose
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

// Google OAuth Strategy

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {

        try {
            const existingUser = await User.findOne({  "google.id": profile.id })

            if(existingUser){
                //we already have a record with the given profile ID
                return done(null, existingUser);
            }
            
            //we don't have the user record with this id
            const user = await new User({
                method: 'google',
                google: {
                    id: profile.id,
                    username: profile.name.givenName,
                    email: profile.emails[0].value
                }
            }).save()
            done(null, user);            
        } catch (error) {
            done(error, false, error.message);
        }
    })
);