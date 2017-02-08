describe('calculator', function () {
  beforeEach(function () {
    calculator.initialize();
    calculator.previousTotal = 10;
  });

  // write unit tests here in the form of "it should do something..."

  
  it("should ", function(){
    calculator.previousTotal = 1;
    calculator.add(4)
    assert.equal(calculator.runningTotal, 5);
  });

  
  // it("should ", function(){
  //   assert.equal(calculator.);
  // });

  // calculator.multiply()
  // it("should ", function(){
  //   assert.equal(calculator.);
  // });

  // calculator.divide()
  // it("should ", function(){
  //   assert.equal(calculator.);
  // });

  // calculator.numberClick()
  // it("should ", function(){
  //   assert.equal(calculator.);
  // });

  // calculator.operatorClick()
  // it("should ", function(){
  //   assert.equal(calculator.);
  // });

  // calculator.clearClick()
  // it("should ", function(){
  //   assert.equal(calculator.);
  // });


});
