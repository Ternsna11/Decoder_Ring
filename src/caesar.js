// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6



const caesarModule = (function () {
 // this function will both encode and decode using the caesar method
const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
  function caesar(input, shift, encode = true){
    if (encode === false) { 
      
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;}
      let result = "";
      // console.log(input);
      // console.log(shift);
      const message = input.toLowerCase().split("");
      for (let i = 0; i < message.length; i++) {
        const currentCharacter = message[i];
        const characterIndex = letters.indexOf(currentCharacter);
        
        if (characterIndex === -1) {
          result += currentCharacter;
        } else {
          let shiftedIndex = characterIndex - shift;
          if (shiftedIndex > 25) {
            shiftedIndex = shiftedIndex - 26;
          }
          if (shiftedIndex < 0) {
            shiftedIndex = shiftedIndex + 26;
          }
          const shiftedCharacter = letters[shiftedIndex];
          result += shiftedCharacter;
        }
      }
      return result;
    }
    // console.log(input);
    // console.log(shift);
    else { 
      
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;}
      let result = "";
      const message = input.toLowerCase().split("");
      for (let i = 0; i < message.length; i++) {
        const currentCharacter = message[i];
        const characterIndex = letters.indexOf(currentCharacter);
        if (characterIndex === -1) {
          result += currentCharacter;
        } else {
          let shiftedIndex = characterIndex + shift;
          if (shiftedIndex > 25) {
            shiftedIndex = shiftedIndex - 26;
          }
          if (shiftedIndex < 0) {
            shiftedIndex = shiftedIndex + 26;
          }
          const shiftedCharacter = letters[shiftedIndex];
          result += shiftedCharacter;
        }
      }
      return result;
    }
   
  }
  return {
    caesar
  };
  })();

module.exports = { caesar: caesarModule.caesar };
