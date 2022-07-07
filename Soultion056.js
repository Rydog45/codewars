// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

Object.assign(String.prototype, {
    digit () {
      return /^\d$/.test(this);
    }
  });