// Write a function that combines two arrays by alternatingly taking elements from each array in turn.

function mergeArrays(a, b) {
    let answer = [];
    
    for (let i = 0; a[i] || b[i]; i++) {
      if (a[i]) {answer.push(a[i])};
      if (b[i]) {answer.push(b[i])};
    }
    
    return answer;
  }