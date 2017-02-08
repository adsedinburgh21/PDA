var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator();
  });

  it("should test the add function by doing the sum: 1 + 4 = 5", function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(calculator.runningTotal, 5);
  });

  it("should test the subtract function by doing the sum: 7 - 4 = 3", function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3);
  });

  it("should test the multiply function by doing the sum: 3 x 5 = 15", function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15);
  });

  it("should test the divide function by doing the sum: 21 / 7 = 3", function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3);
  });

  it("when runningTotal = 0 and then a number is clicked, the runningTotal should be set to the value of the number that was clicked", function(){
    calculator.runningTotal = 0;
    calculator.newTotal = false;
    calculator.numberClick(4);
    assert.equal(calculator.runningTotal, 4);
  });

  it("when newTotal = true and then a number is clicked, the runningTotal should be set to the value of the number that was clicked", function(){
    calculator.newTotal = true;
    calculator.runningTotal = 200;
    calculator.numberClick(6);
    assert.equal(calculator.runningTotal, 6);
  });

  it("when newTotal = true and then a number is clicked, newTotal should be set to equal false", function(){
    calculator.newTotal = true;
    calculator.runningTotal = 1;
    calculator.numberClick(7);
    assert.equal(calculator.newTotal, false);
  });

  it("should concatenate multiple button clicks", function(){
    calculator.runningTotal = 0;
    calculator.numberClick(3);
    calculator.numberClick(8);
    calculator.numberClick(1);
    assert.equal(calculator.runningTotal, 381);
  });

  it("should chain multiple operations together", function(){
    calculator.runningTotal = 0;
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.numberClick(5);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('/');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 18);
  })

  it("clearClick() should clear the only the running total when the running total is greater than 0", function(){
    calculator.runningTotal = 5;
    calculator.previousOperator = '+';
    calculator.previousTotal = 42;
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0);
    assert.equal(calculator.previousOperator, '+');
    assert.equal(calculator.previousTotal, 42);
  });

  it("clearClick() should clear the previous operator and the previous total when the running total equals 0", function(){
    calculator.runningTotal = 0;
    calculator.previousOperator = '+';
    calculator.previousTotal = 42;
    calculator.clearClick();
    assert.equal(calculator.previousOperator, null);
    assert.equal(calculator.previousTotal, null);
  });

  it("clearClick should clear the runningTotal without affecting the calculation", function(){
    calculator.runningTotal = 0;
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(9);
    calculator.clearClick();      
    calculator.numberClick(4);
    calculator.operatorClick('=');
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.clearClick();
    calculator.numberClick(1);
    calculator.numberClick(0);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 50);
  });

  it("clearClick() should clear the previous operator and the previous total when the running total equals '! Cannot divide by zero !'", function(){
    calculator.runningTotal = '! Cannot divide by zero !';
    calculator.previousOperator = '+';
    calculator.previousTotal = 42;
    calculator.clearClick();
    assert.equal(calculator.previousOperator, null);
    assert.equal(calculator.previousTotal, null);
  });

  it("should be able to use zeo as the numerator so can enter negative numbers - clicking zero", function(){
    calculator.numberClick(0);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, -4);
  });

  it("should be able to use zeo as the numerator so can enter negative numbers - clicking clear", function(){
    calculator.clearClick();
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, -4);
  });
});
