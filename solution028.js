// Your task is to sum the differences between consecutive pairs in the array in descending order.

function sumOfDifferences(arr) {
    return arr.length ? Math.abs(Math.max(...arr) - Math.min(...arr)) : 0;
  }