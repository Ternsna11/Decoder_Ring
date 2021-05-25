// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusCipherArray = {
  a: 11, b: 21, c:31, d:41, e:51,
  f: 12, g: 22, h:32, i:42, j:42, k: 52,
  l: 13, m: 23, n:33, o:43, p:53,
  q: 14, r: 24, s:34, t:44, u:54,
  v: 15, w: 25, x:35, y:45, z:55,
}

const polybiusDecoderKeyArray = {
  11:"a", 21:"b", 31:"c", 41:"d", 51:"e",
  12:"f", 22:"g", 32:"h", 42:"(i/j)", 52:"k" ,
  13:"l", 23:"m", 33:"n", 43:"o", 53:"p",
  14:"q", 24:"r", 34:"s", 44:"t", 54:"u",
  15:"v", 25:"w", 35:"x", 45:"y", 55:"z",
}
const polybiusModule = (function () {
 // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    if(encode === false){
     let split = input.split(" ")
     const isOdd = split.reduce((acc, arr) => acc + arr.length, 0) % 2;
  if (isOdd) return false;
  split = split.map((decoded) => {
    console.log(decoded)
      return decoded.split("").reduce((acc, char, index, collection) => {
        // console.log("acc",acc ,"char",char, "index",index, collection)
        if (char === " ") {
          acc.push(" ");
        } else if (!(index % 2)) {
          acc.push(char + collection[index + 1]);
        }
        return acc;
      }, []);
    })
    .reduce((a, b) => a.concat(" ", b));
    return split.map((char) => polybiusDecoderKeyArray[char] || " ").join("");
    }
    else {
    let result = ""
    const split = input.toLowerCase().split(" ")
    for(let i = 0; i <split.length; i++){
      let currentWord = split[i];
      for(let j = 0; j <currentWord.length; j++){
         const currentCharacterValue = polybiusCipherArray[currentWord[j]];
      console.log(currentCharacterValue, 'currentValue')
      // let currentCharacter = message.forEach(value) is alternative way to do this
      result += currentCharacterValue
      }
      if(i<split.length -1){
        result += " "
      }    
     
    }
    console.log(result)
    return result
  } 

  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
