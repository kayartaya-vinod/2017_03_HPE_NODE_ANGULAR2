console.log("From two.js");

var $ = require("jquery");
$(function(){
    $("h1:first").css( "color", "green");
});