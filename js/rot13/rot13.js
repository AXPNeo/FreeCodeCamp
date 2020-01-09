function rot13(str) { // LBH QVQ VG!
    var strArr = str.split("");
    var decodedArr = strArr.map(letter =>{
      if(/[A-Z]/.test(letter)){
        return String.fromCharCode(letter.charCodeAt(0) > 77 ? 
                                    letter.charCodeAt(0) - 13 : letter.charCodeAt(0) + 13);
      }
      return letter;
    });
  
    var decoded = decodedArr.join("");
    console.log(decoded)
    return decoded;
  }
  
  // Change the inputs below to test
  rot13("SERR PBQR PNZC");