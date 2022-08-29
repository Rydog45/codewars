// Create a function to lowercase all strings in an array. Non-string items should remain unchanged.

function arrayLowerCase(arr) {
    return arr.map(function(item) {
      if(typeof item === 'string') {
        return item.toLowerCase();
      }
      return item;
    });  
  }