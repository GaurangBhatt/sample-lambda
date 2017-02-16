'use strict';

const chai = require('chai');
const should = chai.should();
const os = require('os');
const lambda = require('../index.js');

describe('Running sample tests', function(){
  before(function(){
    console.log('Do something before the test starts');
  });

  it ('Lambda should return hello message', function (done) {
    var context = {
      succeed : function(result) {
        result.message.should.equal('Hello Serverless pipeline!!!');
        done();
      },
      fail: function(result) {
        done(new Error( 'never context.fail' ));
      }
    }
    lambda.handler("event", context);
  });

  after(function(){
    console.log('Do something after the test ends');
  });
});
