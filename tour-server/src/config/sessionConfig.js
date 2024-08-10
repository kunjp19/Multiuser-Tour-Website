const session = require('express-session');

const sessionConfig = session({
    secret: 'website development CSUEB',
    resave: false,
    saveUninitialized: false,
    name: 'TourSid'
});

module.exports = sessionConfig;