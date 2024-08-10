const DataStore = require('nedb-promises');

const dbFilePathTours = ('../db/toursDb');
const dbFilePathUsers = ('../db/usersDb');
const toursDb = DataStore.create(dbFilePathTours);
const usersDb = DataStore.create(dbFilePathUsers);

module.exports = {toursDb, usersDb};