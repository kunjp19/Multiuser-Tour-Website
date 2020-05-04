const rq = require("request-promise-native");

var options = {
    method:"GET",
    uri: "http://10.0.0.178:3434/tours",
    headers: {
        "User-Agent": "Request-Promise",
        "Content-Type":"Application/json"
     },
    json: true
};

rq(options).then(function (result) {
  for(var i=0; i<result.length; i++)
  {
    console.log("Tour Name:"+result[i].name);
    console.log("Date:" +result[i].date);
    }
    });
