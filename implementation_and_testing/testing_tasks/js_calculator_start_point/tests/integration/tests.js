var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });


//Do the number buttons work to update the display of the running total?
  it('should update the display of the running total when a number button is clicked - single button clicked', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2');
  });

  it('should update the display of the running total when number buttons are clicked - multiple buttons clicked', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number5')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2005');
  });

  it('should not concatenate zeros to the displayed running total when mutliple zeros are clicked - only one zero should be displayed', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0');
  });

  it('should not concatenate zeros to the displayed running total when they have been clicked before a number with a value greater than zero', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number5')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5');
  });

//Do each of the arithmetical operations work to update the display with the result of the operation?
  it('should update the display with the result of a sum using the "+" operation', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number8')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('10');
  });

  it('should update the display with the result of a sum using the "-" operation', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number8')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('6');
  });

  it('should update the display with the result of a sum using the "*" operation', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number8')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('16');
  });

  it('should update the display with the result of a sum using the "/" operation', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number8')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4');
  });

//Can we chain multiple operations together?
  it('should be able to chain multiple operations together and update display with the running total', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number8')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4');
    element(by.css('#number6')).click();
    element(by.css('#operator_subtract')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('10');
    element(by.css('#number3')).click();
    element(by.css('#operator_multiply')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('7');
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('21');
  });

//Does it work as expected for a range of numbers? (positive, negative, decimals, very large numbers)
  it('should be able to work with and display negative numbers', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number8')).click();
    element(by.css('#operator_multiply')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-7');
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-28');
  });

  it('should be able to work with and display decials', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_multiply')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0.3333333333333333');
    element(by.css('#number3')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('10');
  });

  it('should be able to work with and display very large numbers', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number1')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1e+22');
  });

  
  //What does the code do in exceptional circumstances:
  // - If you divide by zero, what is the effect? 
  //This test became no longer valid after I added an if/else statement to the .divide() function to alter the message returned on the display when dividing by zero to '! Cannot divide by zero !' instead of 'Infinity'.
  // it('should display "Infinity" when a number is divided by 0', function(){
  //   running_total = element(by.css('#running_total'));
  //   element(by.css('#number5')).click();
  //   element(by.css('#operator_divide')).click();
  //   element(by.css('#number0')).click();
  //   element(by.css('#operator_equals')).click();
  //   expect(running_total.getAttribute('value')).to.eventually.equal('Infinity');
  // });

  // - Can you write a test to describe what you'd prefer to happen, and then correct the code to make that test pass.

  // If you divide by zero, I would prefer that the message displayed was "! Cannot divide by zero !" rather than "Infinity". To achieve this I have added an if/else statement to the .divide() function in the calculator.js
  it('should display "! Cannot divide by zero !" when a number is divided by 0', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number5')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('! Cannot divide by zero !');
  });

  // I noticed that the calculator could not use zero as the numerator in its calculations, so users could not enter negative numbers directly by clicking '-' followed by a number when the previous total equaled zero. This was due to the conditions of an If statement in the operatorClick() function in calculator.js:
  //    if ( this.previousTotal && this.previousOperator)
  // I have removed 'this.previousTotal &&' from the conditions leaving only:
  //    if ( this.previousOperator)
  // Now when the previous total value is zero it will be used as the numerator in calculations so the user can now enter negative numbers after the clear button has been clicked or after the zero has been clicked.
  it('should be able to enter negative numbers when previous total equals zero - after clicking zero', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number0')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number8')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-8');
  });

  it('should be able to enter negative numbers when previous total equals zero - after clicking clear', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#clear')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number6')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-6');
  });
});