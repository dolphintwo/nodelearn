const fs = require('fs');

var rs = fs.createReadStream('./stream_sample.text');
var ws = fs.createWriteStream('./pipe_output.txt');

rs.pipe(ws);