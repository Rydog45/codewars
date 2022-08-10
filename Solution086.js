// This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

// Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7). "^1" should not be truncated when exponent = 2.

function derive(coefficient,exponent) {
    let coe = coefficient*exponent
    let expo = exponent-1
    return `${coe}x^${expo}`
  }