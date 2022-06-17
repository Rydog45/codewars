// Create a function that takes an array of letters, and combines them into words in a sentence.

function arrAdder(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
      for(let j = 0; j < arr[i].length; j++) {
        if(arr[i][j]) result[j] = result[j] ? `${result[j]}${arr[i][j]}` : arr[i][j];
      }
    }
    return result.join(' ');
  }
  
  