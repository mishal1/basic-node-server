var expect = chai.expect;

describe('Bike', function() {

  var bike;

  it ('is not broken when created', function() {
    bike = new Bike();
    expect(bike.isBroken).to.equal(false);
  });

});