var express = require("express");
var app = express();

app.use(express.static(__dirname));

// handler for "/"
app.get("/", (req, resp)=>{
    resp.end("This is the home-page");
});

// handler for "/info"
app.get("/info", (req, resp)=>{
    resp.end("This is the info-page");
});

app.listen(3000, ()=>{
    console.log("Server started at http://localhost:3000/");
});
console.log("Starting the server...");
