// The function new_avg(arr, navg) should return the expected donation (rounded up to the next integer) that will permit to reach the average navg.
function newAvg(arr, newavg) {
    const navg = newavg * (arr.length + 1) - arr.reduce((acc, el) => acc + el, 0);
    if (navg <= 0) {
      throw 'ValueError';
    }
    return Math.ceil(navg);
  }