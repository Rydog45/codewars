// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

function switcheroo(x){

    return x.split("").map(letter => {
      if (letter == "a") return "b";
      if (letter == "b") return "a";
      if (letter == "c") return "c";
      else return letter
  
    }).join("")}