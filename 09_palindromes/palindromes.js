const palindromes = function (word) {
    word = [...word.toLowerCase().trim().replace(/!/g,'').replace(/ /g,'').replace(/\?/g,'').replace(/\,/g,'').replace(/\./g,'')];
    for(let i = 0; i < Math.floor(word.length/2); i++) {
        if(word[i] != word[(word.length -1)- i]) return false;
    }
    return true;    
};
  
  module.exports = palindromes;
  
// Do not edit below this line
module.exports = palindromes;
