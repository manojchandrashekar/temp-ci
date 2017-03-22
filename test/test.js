var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
    it('respond with ci', function(done) {
        request(app).get('/').expect('hello ci', done);
    });
});