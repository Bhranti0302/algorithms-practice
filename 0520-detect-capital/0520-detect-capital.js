/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
   let uppercase = 0;

   for(let i=0; i<word.length; i++){
    if(word[i] === word[i].toUpperCase()){
        uppercase++;
    }
   } 

   return uppercase === word.length || uppercase === 0 || (uppercase===1 && word[0] === word[0].toUpperCase())
};