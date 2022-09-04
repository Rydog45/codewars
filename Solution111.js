// The toString() method has been disabled for booleans, numbers, arrays and objects. Your goal is to retrive toString() for the following data types.



Boolean.prototype.toString = function() {
    return this == true ? "true": "false";
  }
  Number.prototype.toString = function() {
    return '' + this;
  }
  Array.prototype.toString = function() {
    return `[${this.map(x => x.toString()).join(",")}]`;
  }