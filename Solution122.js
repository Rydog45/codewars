// You are given array of integers, your task will be to count all pairs in that array and return their count.

function duplicates(array){
    let arr, count = 0;
    arr = array.slice();
    arr.sort(); // 
    for (let i = 0;  i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) {
        count++;
        i++;
      }  
    }
    return count;
  }