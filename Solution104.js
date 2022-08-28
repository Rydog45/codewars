// Get the next prime number!

// You will get a numbern (>= 0) and your task is to find the next prime number.

// Make sure to optimize your code: there will numbers tested up to about 10^12

function nextPrime(n){
    if (n <= 1) return 2
    const go = (num) => {
      for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i == 0) return go(num+1) 
      }
      return  num;
    }
    return go(n+1)
  }