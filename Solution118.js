// Given a string, return a copy of the string with the vowels' case swapped.

function swap(x) {
    if(x === x.toUpperCase()){
      return x.toLowerCase();
    }
    
    return x.toUpperCase();
  }
  
  function swapVowelCase(str) {
    return str.replace(/[aeoui]/gi, swap);
  }