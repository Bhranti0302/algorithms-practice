/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let sum=0;

    for (let char of t) sum += char.charCodeAt(0);
    for (let char of s) sum -= char.charCodeAt(0)

    return String.fromCharCode(sum)
};