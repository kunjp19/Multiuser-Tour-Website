const rp = require("request-promise-native");

let cookiejar = rp.jar();
let loginOptions = {
    uri: 'http://10.0.0.179:3434/login',
    json: true,
    method: "POST",
    body: { // admin user, see users.json file
        "email": "sided1830@outlook.com",
        "password": "C}m8\"L,F"
    },
    jar: cookiejar
};

let BadEmail = {
    uri: 'http://10.0.0.179:3434/login',
    json: true,
    method: "POST",
    body: { // admin user, see users.json file
        "email": "BadEmail@email.com",
        "password": "C}m8\"L,F"
    },
    jar: cookiejar
};

let BadPassword = {
    uri: 'http://10.0.0.179:3434/login',
    json: true,
    method: "POST",
    body: { // admin user, see users.json file
        "email": "sided1830@outlook.com",
        "password": "Wrong"
    },
    jar: cookiejar
};
async function someTests() {
    console.log("Login Test 1 : Good Login");
    try {
        let res1 = await rp(loginOptions);
        console.log("Cookies: "+ cookiejar.getCookieString(loginOptions.uri));
        console.log(`login results: ${JSON.stringify(res1)}`);

        let res2 = await rp(loginOptions);

        console.log(`Good login Test results: ${JSON.stringify(res2)}`);
        console.log("Cookies: "+cookiejar.getCookieString(loginOptions.uri));

        let res3 = await rp(loginOptions);

        console.log("Cookies after Log out: "+cookiejar.getCookieString(loginOptions.uri));
        console.log(`login results: ${JSON.stringify(res3)}`);

    } catch (e) {
        console.log(`Error: ${e}\n`);


    }

    console.log("\n\nLogin Test 2: Bad Email")
    try {
      let res1 = await rp(BadEmail);
      console.log("Cookies after visiting Tours: "+cookiejar.getCookieString(BadEmail.uri));
      console.log(`login results: ${JSON.stringify(res1)}`);

      let res2 = await rp(BadEmail);
      console.log("Cookies after Logging In: "+cookiejar.getCookieString(BadEmail.uri));
      console.log(`login results: ${JSON.stringify(res2)}`);
    } catch (e) {
        console.log(`Bad Email Login Error: ${e}\n`);
        console.log("Cookies after Login Test 2: "+cookiejar.getCookieString(BadEmail.uri));
    }
    console.log("\n\nLogin Test 3: Bad Password")
    try {
      let res1 = await rp(BadPassword);
      console.log("Cookies after visiting Tours: "+cookiejar.getCookieString(BadPassword.uri));
      console.log(`login results: ${JSON.stringify(res1)}`);

      let res2 = await rp(BadPassword);
      console.log("Cookies after Logging In"+cookiejar.getCookieString(BadPassword.uri));
      console.log(`login results: ${JSON.stringify(res2)}`);
    } catch (e) {
        console.log(`Bad Password Error: ${e}\n`);
        console.log("Cookies after Login Test 3: "+cookiejar.getCookieString(BadPassword.uri));
    }
}
someTests();
