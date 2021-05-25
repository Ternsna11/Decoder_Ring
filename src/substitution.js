// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
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
const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true){
     
      
      if (!alphabet || alphabet.length != 26) {
        return false;
      } 
    const cipherAlphabet = alphabet.split("");
    const repeatCheck = cipherAlphabet.reduce((acc, character,index, collection) => {  
      if(character in acc){acc[character]++} else {
        acc[character] = 1
      } 
      return acc
      },{}) 
 
    for(const char in repeatCheck){
//       console.log(repeatCheck[char])
      if(repeatCheck[char] > 1) return false
    }
    console.log(repeatCheck)
      if(!encode){
      let result = "";
      input = input.toLowerCase();
//       
      for (let index = 0; index < input.length; index++) {
        const currentCharacter = input[index];
          const currentCharacterIndex = alphabet.indexOf(currentCharacter);
          if (currentCharacterIndex === -1) { 
          result += currentCharacter;
        } else { //console.log(currentCharacter, currentCharacterIndex)
          const lettersCharacter = letters[currentCharacterIndex];
//           console.log("a",   lettersCharacter)
          result += lettersCharacter;
        }
      }  
    return result;
      
    } 
    if(encode){
      let result = "";
     const message = input.toLowerCase();
//       console.log("bb",cipherAlphabet)
      for (let index = 0; index < input.length; index++) {
        const currentCharacter = input[index];
          const currentCharacterIndex = letters.indexOf(currentCharacter);
          if (currentCharacterIndex === -1) {
           
          result += currentCharacter;
        } else { //console.log(currentCharacter, currentCharacterIndex)
          const lettersCharacter = cipherAlphabet[currentCharacterIndex];
//           console.log("a",   lettersCharacter)
          result += lettersCharacter;
        }
      }  
    return result;
      }
    } 
    
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };