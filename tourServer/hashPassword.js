const fs = require('fs');
const bcrypt = require('bcryptjs');
const users = require('./usersTours.json');
let nRounds = 13;
let hashedUsers = [];
let start = new Date(); // timing code
console.log(`Starting password hashing with nRounds = ${nRounds}, ${start}`);

for(var i=0; i<users.length; i++)
 {
    let salt = bcrypt.genSaltSync(nRounds);
    let passHash = bcrypt.hashSync(users[i].password, salt);
    users[i].password = passHash;
}
let elapsed =new Date()- start;
hashedUsers=users;
console.log(`Finished password hashing, ${elapsed/1000} seconds.`);
fs.writeFileSync("userTourHash.json", JSON.stringify(hashedUsers, null, 2));
