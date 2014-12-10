var chai = require('chai');
var expect = chai.expect;
var Bike = require('../src/bike')

describe('Bike', function() {

  var bike;

  it ('is not broken when created', function() {
    bike = new Bike();
    expect(bike.isBroken).to.equal(false);
  });

});