function maxchar(str){
    let charMap = {};
    let max = 0;
    let maxchar = '';

    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }

    }

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxchar = char;
        }
    }

    return maxchar;
}