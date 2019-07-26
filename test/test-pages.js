var assert = require('assert'),
    http = require('http');

var server = require('../index.js');

describe('/', function () {
  it('should return 200', function (done) {
    http.get('http://localhost:8080', function (res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });

  it('should say "Hello World!"', function (done) {
    http.get('http://localhost:8080', function (res) {
      var data = '';

      res.on('data', function (chunk) {
        data += chunk;
      });

      res.on('end', function () {
        assert.equal('Hello World!', data);
        done();
      });
    });
  });
});
