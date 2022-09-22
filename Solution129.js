// The Array's reverse() method has gone missing! Re-write it, quick-sharp!

Array.prototype.reverse = function() {
    var arr = this.splice(0);  
    
    while(arr.length) {
      this.push(arr.pop());
    }   
    
    return this;
  };