/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    const firstUpper = new Array(26).fill(-1);
    const lastLower = new Array(26).fill(-1);
    
    for (let i = 0; i < word.length; i++) {
        const ch = word[i];
        const idx = ch.toLowerCase().charCodeAt(0) - 97;
        
        if (ch >= 'a' && ch <= 'z') {
            lastLower[idx] = i;
        } else {
            if (firstUpper[idx] === -1) {
                firstUpper[idx] = i;
            }
        }
    }
    
    let count = 0;
    
    for (let i = 0; i < 26; i++) {
        if (lastLower[i] !== -1 && firstUpper[i] !== -1 && lastLower[i] < firstUpper[i]) {
            count++;
        }
    }
    
    return count;
};