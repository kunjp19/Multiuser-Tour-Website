const express = require('express');
const bcrypt = require('bcryptjs');
const { usersDb } = require('../config/dbConfig'); // Ensure correct import
const logger = require('../config/logger');

const router = express.Router();

// Logger middleware
router.use((req, res, next) => {
    logger.info(`${req.method} ${req.url}`);
    next();
});

router.post('/login', express.json(), async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await usersDb.findOne({ email }); // Ensure usersDb has findOne method

        if (!user) {
            console.error(`Login failed: User not found for email ${email}`);
            return res.status(401).json({ error: true, message: "User not found" });
        }

        if (bcrypt.compareSync(password, user.password)) {
            req.session.regenerate((err) => {
                if (err) {
                    console.error(`Session regeneration error: ${err}`);
                    return res.status(500).json({ error: true, message: "Internal server error" });
                }
                req.session.user = { ...req.session.user, ...user };
                delete req.session.user.password;
                console.log(`User ${email} logged in successfully`);
                res.json(req.session.user);
            });
        } else {
            console.error(`Login failed: Incorrect password for email ${email}`);
            res.status(401).json({ error: true, message: "User/Password error" });
        }
    } catch (err) {
        console.error(`Login error: ${err}`);
        res.status(500).json({ error: true, message: "Internal server error" });
    }
});

router.get('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy((err) => {
            if (err) {
                console.error(`Logout error: ${err}`);
                return res.status(500).json({ error: true, message: "Internal server error" });
            }
            res.clearCookie('TourSid', { path: '/' });
            console.log(`User logged out successfully`);
            res.json({ message: "Goodbye" });
        });
    } else {
        res.status(400).json({ error: true, message: "No active session" });
    }
});
module.exports = router;