const express = require("express");
const sessionConfig = require('./config/sessionConfig');
const { setUpSessionMiddleware } = require('./middlewares');
const { tourRoutes, userRoutes } = require('./routes');
const initToursDb = require('./config/initToursDb');
const initUsersDb = require('./config/initUsersDb');

const app = express();

async function initDb() {
    await initToursDb();
    await initUsersDb();
}

initDb().then(() => {
    app.use(sessionConfig);
    app.use(setUpSessionMiddleware);
    app.use(tourRoutes);
    app.use(userRoutes);
}).catch(err => {
    console.error('Failed to initialize databases:', err);
    process.exit(1);
});

module.exports = app;