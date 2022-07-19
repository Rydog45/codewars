// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value. 

function sumArray(array) {
    if (array == null || array.length == 0 || array.length == 1) return 0
    else {
      const sumResult = array.reduce(function(sum, current) {
        return sum + current;
      }, 0);
      
      let max = Math.max.apply(null, array);
      let min = Math.min.apply(null, array);
      
      return sumResult-max-min;
    }
  }