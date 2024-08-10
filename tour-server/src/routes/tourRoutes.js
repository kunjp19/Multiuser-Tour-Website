const express = require('express');
const { toursDb } = require('../config/dbConfig');
const { checkAdminMiddleware } = require('../middlewares');
const logger = require('../config/logger');

const router = express.Router();

router.use((req, res, next) => {
    logger.info(`${req.method} ${req.url}`);
    next();
});

router.get('/tours', async (req, res) => {
    try {
        const tours = await toursDb.find({});
        res.send(tours);
    } catch (err) {
        logger.error(`Error fetching tours: ${err.message}`, { stack: err.stack });
        res.status(500).send(err);
    }
});

router.post('/tours/add', checkAdminMiddleware, express.json(), async (req, res) => {
    try {
        const newTour = await toursDb.insert(req.body);
        res.status(200).json(newTour);
    } catch (err) {
        logger.error(`Error adding tour: ${err.message}`, { stack: err.stack });
        res.status(500).send(err);
    }
});

router.delete('/tours/:id', checkAdminMiddleware, async (req, res) => {
    try {
        await toursDb.remove({ _id: req.params.id });
        res.status(200).send({ message: "Deleted Tours" });
    } catch (err) {
        logger.error(`Error deleting tour: ${err.message}`, { stack: err.stack });
        res.status(500).send(err);
    }
});

router.get('/tourcount', async (req, res) => {
    try {
        const tours = await toursDb.find({});
        res.json(tours.length);
    } catch (err) {
        logger.error(`Error fetching tour count: ${err.message}`, { stack: err.stack });
        res.status(500).send(err);
    }
});

router.get('/tours/:id', async (req, res) => {
    try {
        const tour = await toursDb.findOne({ _id: req.params.id });
        if (!tour) {
            res.status(404).json({ message: "Error" });
        } else {
            res.status(200).json(tour);
        }
    } catch (err) {
        logger.error(`Error fetching tour by ID: ${err.message}`, { stack: err.stack });
        res.status(500).send(err);
    }
});

module.exports = router;