/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev = 0;

    while (x !== 0) {
        let digit = x % 10;
        x = (x / 10) | 0; // truncate toward 0

        // Check overflow before multiplying
        if (rev > 214748364 || (rev === 214748364 && digit > 7)) return 0;
        if (rev < -214748364 || (rev === -214748364 && digit < -8)) return 0;

        rev = rev * 10 + digit;
    }

    return rev;
};