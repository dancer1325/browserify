// relative paths
var foo = require('./foo.js');
var bar = require('./bar.js');

// module paths         == search |   node_modules
var gamma = require('gamma');

var elem = document.getElementById('result');
var x = foo(100) + bar('baz');
elem.textContent = gamma(x);

module.exports = function (n) { return n * 111 }