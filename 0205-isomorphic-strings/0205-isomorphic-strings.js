/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    let map1 = new Map();
    let map2 = new Map();

    for (let i = 0; i < s.length; i++) {
        let ch1 = s[i];
        let ch2 = t[i];

        // check s → t
        if (map1.has(ch1) && map1.get(ch1) !== ch2) {
            return false;
        }

        // check t → s
        if (map2.has(ch2) && map2.get(ch2) !== ch1) {
            return false;
        }

        map1.set(ch1, ch2);
        map2.set(ch2, ch1);
    }

    return true;
};