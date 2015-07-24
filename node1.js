var http = require("http");
var port = 2337;

console.log("Startup.");

http.createServer(function (req, res) {
    console.log("Request URL: " + req.url);
    res.end("Hello World");
}).listen(port);

console.log("Server running at http://localhost:" + port + "/");
