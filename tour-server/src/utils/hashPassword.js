const fs = require('fs');
const bcrypt = require('bcryptjs');
const users = require('../data/users.json');
let nRounds = 13;
let hashedUsers;

(async () => {
    let start = new Date(); // timing code
    console.log(`Starting password hashing with nRounds = ${nRounds}, ${start}`);

    for (let i = 0; i < users.length; i++) {
        let salt = await bcrypt.genSalt(nRounds);
        users[i].password = await bcrypt.hash(users[i].password, salt);
    }
    let elapsed = new Date() - start;
    hashedUsers = users;
    console.log(`Finished password hashing, ${elapsed / 1000} seconds.`);
    fs.writeFileSync("../data/usersHash.json", JSON.stringify(hashedUsers, null, 2));
})();