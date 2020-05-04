const app = require('./tourServer'); // Import server
const host = '192.168.86.249';
const port = '3434';
app.listen(port, host, function () {
    console.log("Tour JSON session server listening on IPv4: " + host +
        ":" + port);

});
