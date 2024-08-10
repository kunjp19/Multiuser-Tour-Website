const users = require('../data/usersHash.json');
const { usersDb } = require('./dbConfig');
const logger = require('./logger');

async function initUsersDb() {
    try {
        const numRemoved = await usersDb.remove({}, { multi: true });
        logger.info(`Cleanup, removed ${numRemoved} users`);
        const newDocs = await usersDb.insert(users);
        logger.info(`Added ${newDocs.length} users`);
    } catch (err) {
        logger.error(`Database error: ${err.message}`, { stack: err.stack });
    }
}

module.exports = initUsersDb;