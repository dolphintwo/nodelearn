'use strict';

var greet = require('./hello');
var s = 'Michael';
greet(s);

var fs = require("fs");
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("message1: done!");
console.log("======================")
fs.readFile('input.text', function(err, data1) {
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
fs.stat('input.txt', function(err, stat) {
    if (err) {
        console.log(err);
    } else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
});
console.log("message4: done")
console.log("======================")