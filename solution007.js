// Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.
function sumEvenNumbers(input) {
    return input.filter(function(el) {
      return el % 2 == 0;
    }).reduce(function(a, b) {
      return a + b;
    });
  }