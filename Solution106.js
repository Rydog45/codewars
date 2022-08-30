// Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

function leastLarger(a,i) {
    console.log(a[i])
    return a.indexOf(Math.min(...a.filter(x=>x>a[i])))
  }