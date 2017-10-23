const crypto = require('crypto');
//md5
const hash = crypto.createHash('md5');

hash.update('Hello, world!');
hash.update('Hello, nodejs!');

console.log(hash.digest('hex'));
//sha256
const hmac = crypto.createHmac('sha256', 'secret-key');

hmac.update('Hello, world!');
hmac.update('Hello, nodejs!');

console.log(hmac.digest('hex'));

function aesEncrypt(data, key) {
    const cipher
}