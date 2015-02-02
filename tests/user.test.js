// file: tests/user.test.js - created at 2015-02-01, 04:57
var should = require('chai').should();
var models = require('../models');

describe('shoutd be testing user', function () {
  
  var userMock = {
  	name : "Itacir Ferreira Pompeu",
  	foto : new Buffer(250),
  }
  
  it('should be user a objetct', function () {
  	var user = new models.User;
  	user.should.be.an("object");
  });
  
  it('should be user will save',function (done) {
  	var user = new models.User;

  	function endHandler(err,result) {
  		err.should.not.exist;
  		result.should.be.an("object");
  		result.should.exist;
  		result.should.equal(user);
  		done();
  	};
  	
  	user.create(userMock,endHandler);

  });

});
