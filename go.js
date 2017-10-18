'use strict';

var fs = require('fs');

var rs = fs.createReadStream('stream_sample.txt', { start: 0, end: 100, encoding: 'utf-8' });

rs.on('data', function(chunk) {
    console.log('DATA:');
    console.log(chunk);
});

rs.on('end', function() {
    console.log('END');
});

rs.on('error', function(err) {
    console.log('ERROR:' + err);
});