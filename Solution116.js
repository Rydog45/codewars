// My PC got infected by a strange virus. It only infects my text files and replaces random letters by *, li*e th*s (like this).

// Fortunately, I discovered that the virus hides my censored letters inside root directory.

// It will be very tedious to recover all these files manually, so your goal is to implement uncensor function that does the hard work automatically.

function uncensor(infected, discovered) {
    let arr = [...discovered]
    return infected.replace(/\*/g, x => arr.shift());
  }