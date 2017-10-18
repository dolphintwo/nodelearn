'use strict';

var greet = require('./hello');
var s = 'Michael';
greet(s);

var fs = require("fs");
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("message1: done!");
console.log("======================")
fs.readFile('input.txt', function(err, data1) {
    if (err) return console.error(err);
    console.log(data1.toString());
})
console.log("message2: done!");