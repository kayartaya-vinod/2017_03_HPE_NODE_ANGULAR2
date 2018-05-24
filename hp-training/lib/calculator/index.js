/// file --> /lib/calcualtor/index.js
/// module --> ./lib/calculator

module.exports = {};

module.exports.add = (n1, n2)=>n1+n2;
module.exports.subtract = (n1, n2)=>n1-n2;
module.exports.multiply = (n1, n2)=>n1*n2;
module.exports.divide = (n1, n2)=>n1/n2;

module.exports.info = `A simple calculator module
Has following four functions:

1. add
2. subtract
3. multiply
4. divide`;