// Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.

function Dog (breed) {
    this.breed = breed;
  }
  
  let snoopy = new Dog("Beagle");
  
  snoopy.bark = function() {
    return "Woof";
  };
  
  let scoobydoo = new Dog("Great Dane");
  scoobydoo.bark = function(){
  return "Woof";
    
  };
  