describe('homepage', function(){
  before(function(){
    casper.start('http:localhost:3000/');
  });

  it('hello worlds', function() {
    casper.then(function(){
      expect("body").to.contain.text("Hello world");
    });
  });  

  it('has input elemnet', function() {
    casper.then(function(){
      'form[action="/"]'.should.be.inDOM.and.be.visible
      'input[name="name"]'.should.be.inDOM.and.be.visible
    });
  });




});