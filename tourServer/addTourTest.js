const rp = require('request-promise-native');
let cookiejar = rp.jar(); // Use this to store cookies in between sessions.

let addTour = {
    uri: 'http://10.0.0.178:3434/tours/add',
    json: true,
    method: "POST",
    body: {
        "name":"Morjim Beach",
        "date":"June 2020"
    },
    jar: cookiejar
};

let loginOptions = {
    uri: 'http://10.0.0.178:3434/login',
    json: true,
    method: "POST",
    body: { // admin user, see users.json file
        "email": "sided1830@outlook.com",
        "password": "C}m8\"L,F"
    },
    jar: cookiejar
}

let loginCust = {
    uri: 'http://10.0.0.178:3434/login',
    json: true,
    method: "POST",
    body: { // admin user, see users.json file
        "email": "sylvan2059@live.com",
        "password": "1wQX_lYt"
    },
    jar: cookiejar
}

let count = {
  uri : 'http://10.0.0.178:3434/tourcount',
  json : true,
  method : "get",
  jar : cookiejar
}

async function someTests() {
    console.log("Login as admin, then adding tour")
    try {
        let res2 = await rp(loginOptions);
        console.log(`login results: ${JSON.stringify(res2)}`);
        console.log(`Cookie: `+(cookiejar.getCookieString(loginOptions.uri)));
        cnt = await rp(count);
        console.log("Number of tours without add"+ cnt);
        let res3 = await rp(addTour);
        console.log(`Add Tour result: ${JSON.stringify(res3)}\n`);
        let res4 = await rp(count);
        console.log("Number of tours after adding "+ res4);
    } catch (e) {
        console.log(`Error: ${e}\n`);
    }

    console.log("Login as customer, then try adding tour")
    try {
        let res4 = await rp(loginCust);
        console.log(`login results: ${JSON.stringify(res4)}`);
        console.log(`Cookie: `+(cookiejar.getCookieString(loginCust.uri)));
        let res5 = await rp(addTour);
        console.log(`Add Tour result: ${JSON.stringify(res5)}\n`);
    } catch (e) {
        console.log(`Error: ${e}\n`);
    }
    console.log("Try adding tour without logging in");
     try {
         let res1 = await rp(addTour);
         console.log(`Add Tour result: ${JSON.stringify(res1)}`);
         console.log(`Cookie: `+(cookiejar.getCookieString(loginCust.uri)));
     } catch (e) {
         console.log(`Error: ${e}\n`);
     }

}

someTests();
