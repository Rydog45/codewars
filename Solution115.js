// Given 2 strings, your job is to find out if there is a substring that appears in both strings. You will return true if you find a substring that appears in both strings, or false if you do not. We only care about substrings that are longer than one letter long.

function SubstringTest(sstr1, sstr2) {
    var str1 = sstr1.toLowerCase();
    var str2 = sstr2.toLowerCase();
    for (var i = 0; i < str1.length-1; i++) {
      for (var j = 0; j < str2.length-1; j++) {
        if ((str1.charAt(i) === str2.charAt(j)) && (str1.charAt(i + 1) === str2.charAt(j + 1)))
          return true;
      }
    }
    return false;
  }