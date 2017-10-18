'use strict';

var fs = require('fs');

var rs = fs.createReadStream('stream_sample.txt', { start: 1, end: 20, autoClose: true })