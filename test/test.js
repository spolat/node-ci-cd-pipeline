const request = require('supertest');

const app = require('../index');

describe('Get', function () {
    it('respond with hello world', function (done) {
        return request(app).get('/').expect('hello world', done());
    });
});