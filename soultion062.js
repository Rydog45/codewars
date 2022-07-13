// This Cube class needs help
// Implement the constructor so that it can take an integer for the side or no args
class Cube {
  
    side;
    
    constructor(s = 0) {
        this.side = Math.abs(s);
    }
    
    getSide() {
      return this.side; 
    }
    setSide(n = 0) {
      this.side = Math.abs(n);
    }
  }