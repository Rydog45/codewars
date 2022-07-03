// A checksum is an algorithm that scans a packet of data and returns a single number. The idea is that if the packet is changed, the checksum will also change, so checksums are often used for detecting transmission errors, validating document contents, and in many other situations where it is necessary to detect undesirable changes in data.

// For this problem, you will implement a checksum algorithm called Quicksum. A Quicksum packet allows only uppercase letters and spaces. It always begins and ends with an uppercase letter.

// Otherwise, spaces and uppercase letters can occur in any combination, including consecutive spaces.

// A Quicksum is the sum of the products of each character’s position in the packet times the character’s value. A space has a value of zero, while letters have a value equal to their position in the alphabet.

function quicksum(packet){
    if (!(packet.match(/^([A-Z]|\s)*$/))) {return 0};
    
    var sum = 0;
    
    for (let i = 0; i <packet.length; i++) {
      let code = packet.charCodeAt(i);
      
      if ((code > 64) && (code <  91)) {
        sum += (code - 64) * (i + 1);
      }
    }
    
    return sum;
  }