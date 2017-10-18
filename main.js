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
console.log("======================")
var data2 = "Hello, Node.js";
fs.writeFile('output.txt', data2, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("message3: done!");
    }
})