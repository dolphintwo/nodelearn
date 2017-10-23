var nock = require('nock');
var request = require('request');

var couchdb = nock('http://www.aaaaaaaaa.com')
    .get('/')
    .reply(200, 'Hello from Google!');