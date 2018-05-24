var http = require("http");
var server = http.createServer((req, resp)=>{
    console.log("processing the request for a client...");
    resp.write("Hello, ");
    resp.end("world!****");
});

server.listen(3000, ()=>{
    console.log("Server started using nodemon!");
    console.log("Using a browser, visit http://localhost:3000/");
});

console.log("Starting the server...");