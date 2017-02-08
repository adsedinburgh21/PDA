var Calculator = function(){
  this.previousOperator = null; // the last operator the user clicked
  this.previousTotal = 0;       // the total of the previous operation
  this.newTotal = true;         // whether the previous operation has just been calculated
  this.runningTotal = 0;        // the current value to operate on the previous total
}

Calculator.prototype = {

  add: function(number){
    this.runningTotal = parseFloat(this.previousTotal) + parseFloat(number);
  },

  subtract: function(number){
    this.runningTotal = parseFloat(this.previousTotal) - parseFloat(number);
  },

  multiply: function(number){
    this.runningTotal = parseFloat(this.previousTotal) * parseFloat(number);
  },

  // I have added an if/else statement to the .divide() function to alter the message displayed on the calculator. It now will display "! Cannot divide by zero !" instead of 'Infinity'.
  divide: function(number){
    if (number == 0){
      this.runningTotal = '! Cannot divide by zero !'
    } else{
      this.runningTotal = parseFloat(this.previousTotal) / parseFloat(number);
    }
  },
      
  numberClick: function(number) {

    // when a number is clicked, if a previous operation has just been completed,
    // or there is a zero in the running total, clear the running total, and reset
    // the `newTotal` flag

    if (this.runningTotal == 0 || this.newTotal) {
      this.runningTotal = '';
      this.newTotal = false;
    }
    // concatenate the clicked number to the running total
    this.runningTotal = parseFloat('' + this.runningTotal + number);

  },

  operatorClick: function(operator) {

    // if there was a previous operator recorded as having been clicked, perform
    // the operation for the previous operator

    // I have removed 'this.previousTotal &&' from the conditions of the if statement. This now allows the user to use zero as the numerator in their calculations. This can be useful for example; when the previous total equals zero the user can now press '-' follwed by a number to get a negative number, which was not previously possible.
    if ( this.previousOperator) {
      switch (this.previousOperator) {
        case ('+'):
        this.add(this.runningTotal);
        break;
        case ('-'):
        this.subtract(this.runningTotal);
        break;
        case ('*'):
        this.multiply(this.runningTotal);
        break;
        case ('/'):
        this.divide(this.runningTotal);
        break;
      }
    }

    // if the 'equals' button was clicked, clear the previous operator, otherwise
    // record what the previous operator was
    if (operator == '=') {
      this.previousOperator = null;
    } else {
      this.previousOperator = operator;
    }
    // replace the previous total with the current running total and flag that a
    // new total has been calculated

    this.previousTotal = this.runningTotal;
    this.newTotal = true;
  },

  // I have altered the code to reset the previousOperator and previousTotal flags when the runningTotal value is zero or '! Cannot divide by zero !'
  clearClick: function() {
    if (this.runningTotal == 0 || this.runningTotal == '! Cannot divide by zero !') {
      this.previousOperator = null;
      this.previousTotal = null;
    }
    this.runningTotal = 0;
  }

};

if (typeof module != 'undefined'){ module.exports = Calculator };
