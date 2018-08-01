const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportConfig = require('../services/passport');

const { validateBody, schemas } = require('../helpers/routeHelpers');
const UsersController = require('../controllers/users');

const passportSignIn = passport.authenticate('local', { session: false });
const passportJWT = passport.authenticate('jwt', { session: false });

router.route('/signup')
        .post(validateBody(schemas.authenticationSchema) ,UsersController.signUp);

router.route('/signin')
        .post(validateBody(schemas.authenticationSchema), passportSignIn , UsersController.signIn);

router.route('/access')
        .get(passportJWT, UsersController.access);

module.exports = router;