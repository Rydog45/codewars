// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

String.prototype.toJadenCase = function () {
    const arrayStr = this.split(' ');
    for (i in arrayStr) {
      arrayStr[i] = arrayStr[i][0].toUpperCase()  + arrayStr[i].slice(1);
    }
    return arrayStr.join(' ');
  };