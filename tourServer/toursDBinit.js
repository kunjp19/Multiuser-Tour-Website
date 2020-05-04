const nedb = require('nedb-promises');
const tours = require('./userTourHash.json');
const tourDB=nedb.create(__dirname+"/UserServer");
async function initTourDB() {
    try {
        let numRemoved = await tourDB.remove({}, {multi: true});
        console.log(`Cleanup, removed ${numRemoved} tours`);
        let newDocs = await tourDB.insert(tours);
        console.log(`Added ${newDocs.length} tours`);
    } catch (err) {
        console.log(`Database error: ${err}`);
    }
}
initTourDB(); // Uncomment to run separately
//module.exports = initTourDB; // Export for test use
