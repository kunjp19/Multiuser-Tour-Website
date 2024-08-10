const tours = require('../data/tours.json');
const { toursDb } = require('./dbConfig');
const logger = require('./logger');

async function initToursDB() {
    try {
        const numRemoved = await toursDb.remove({}, { multi: true });
        logger.info(`Cleanup, removed ${numRemoved} tours`);
        const newDocs = await toursDb.insert(tours);
        logger.info(`Added ${newDocs.length} tours`);
    } catch (err) {
        logger.error(`Database error: ${err.message}`, { stack: err.stack });
    }
}

module.exports = initToursDB;