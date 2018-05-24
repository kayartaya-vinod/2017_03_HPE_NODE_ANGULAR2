console.log("From inside the main.js");
console.log("Hooray!!");

require("./one");
require("./two");

require("bootstrap-loader");

// require("../node_modules/bootstrap/dist/css/bootstrap.css");
require("../node_modules/font-awesome/css/font-awesome.css");
// require("../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss");

var angular = require("angular");
var app = angular.module("app", []);
app.controller("ctr1", ["$scope", require("./ctr1")]);