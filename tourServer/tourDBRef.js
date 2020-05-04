const DataStore = require('nedb-promises');
// Create NEDB instance for tourDB links it to disk file
let tourDB = DataStore.create(__dirname + '/tourDb');
module.exports = tourDB;
