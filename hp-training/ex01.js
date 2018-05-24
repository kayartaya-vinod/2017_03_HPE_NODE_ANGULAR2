var hi = require("./lib/hello");
var os = require("os");

hi();

console.log("typeof os is", typeof os);
console.log("No.of CPUs", os.cpus());