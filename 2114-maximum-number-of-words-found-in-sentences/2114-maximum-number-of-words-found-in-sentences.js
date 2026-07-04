var mostWordsFound = function(sentences) {
    let max = 0;

    for (let s of sentences) {
        let words = 1;

        for (let char of s) {  // ✅ directly iterate string
            if (char === " ") {
                words++;
            }
        }

        max = Math.max(max, words);
    }

    return max;
};