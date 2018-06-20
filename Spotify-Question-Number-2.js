// Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string. 

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. 
// Note: k is guaranteed to be a positive integer. 

// For s = "4[ab]", the output should be decodeString(s) = "abababab" 
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

function decodeString(s){
    const regexPattern = /(\d+)\[(\w+)\]/;
    var chunk = s.replace(regexPattern, (match, num, str) => {
      console.log("This is the match: " + match)
      console.log("This is the num: " + num)
      console.log("This is the str: " + str)
      console.log("This is the regexPattern: " + regexPattern)
      return str.repeat(num);
    });
    console.log("this is the chunk:"+ chunk)
    if (!regexPattern.test(chunk)) {
      //using boolean test to see if there are still any pattern matches in the string after initial 
      //replacement. If not, return whole thing. If so, go to else
      console.log("Now we're in the if statement")
      return chunk;
    } else {
      //recursive function use 
      console.log("now we're in the else statement")
      return decodeString(chunk);
    }
  }