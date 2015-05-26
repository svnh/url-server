var request = require('request');
var expect = require('chai').expect;

describe('Url server routes', function() {
  before(function(done) {
    this.timeout(3000);
    require('../server.js');
    done();
  });

  it('should be able to access urls/create route', function(done) {
    request('http://localhost:3000/urls/create', function(req, res) {
      expect(res.statusCode).to.equal(200);
      done();
    })
  });

  it('should be able to access urls/update route', function(done) {
    request('http://localhost:3000/urls/update', function(req, res) {
      expect(res.statusCode).to.equal(200);
      done();
    })
  });

  it('should be able to access urls/delete route', function(done) {
    request('http://localhost:3000/urls/delete', function(req, res) {
      expect(res.statusCode).to.equal(200);
      done();
    })
  });

  it('should be able to access / route', function(done) {
    request('http://localhost:3000/', function(req, res) {
      expect(res.statusCode).to.equal(200);
      done();
    })
  });

  it('should be able to retreive data through the /urls route', function(done) {
    request('http://localhost:3000/urls', function(req, res) {
      expect(res.body).to.contain('firstFolder');
      expect(res.body).to.contain('secondFolder');
      expect(res.body).to.contain('thirdFolder');
      expect(res.statusCode).to.equal(200);
      done();
    })
  });
});
