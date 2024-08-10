const express = require('express');
const app = express();
const session = require('express-session');

const cookieName = "TourSid"; // Session ID cookie name, use this to delete cookies too.
app.use(session({
    secret: 'website development CSUEB',
    resave: false,
    saveUninitialized: false,
    name: cookieName // Sets the name of the cookie used by the session middleware
}));

app.use(express.json());

const tours = require('../data/tours.json');
// This initializes session state
const setUpSessionMiddleware = function (req, res, next) {
    console.log(`session object: ${JSON.stringify(req.session)}`);
    console.log(`session id: ${req.session.id}`);
    if (!req.session.user) {
        req.session.user = {role: "guest"};
    }
    next();
};

app.use(setUpSessionMiddleware);