// Implement a function center that takes a string strng, an integer width, and an optional character fill (default: ' ') and returns a new string of length width where strng is centered and on the right and left padded with fill.
function center (string, width, fill = ' ') {
  
    if (string.length >= width) {
      return string;
    }
    
    let right = Math.floor((width - string.length) / 2),
        left  = (width - string.length) - right;
    
    string = fill.repeat(left) + string + fill.repeat(right);
    
    return string;
  }