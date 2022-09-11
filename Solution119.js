// Given an array of ints, return the index such that the sum of the elements to the right of that index equals the sum of the elements to the left of that index. If there is no such index, return -1. If there is more than one such index, return the left-most index.

function peak(arr) {
    let [left, right] = [0, arr.reduce((a, b) => a + b)];
    
    for (let i = 0; i < arr.length; i++) {
      right -= arr[i];
      if (left == right) return i;
      left += arr[i];
    }
    
    return -1;
  }