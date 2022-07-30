// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.
function countBy(x, n) {
    let z = [];
    let index = 0;
    while(n>0) {
      index+=x;
      z.push(index);
      n--;
    }
    return z;
  }