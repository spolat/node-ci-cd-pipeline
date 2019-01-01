const request = require('supertest');

const app = require('../index');

describe('Get', function () {
    it('respond with hello world', function (done) {
        request(app).get('/').expect('hello world', done());
    });
});