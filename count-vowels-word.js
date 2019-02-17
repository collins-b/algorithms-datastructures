function vowels(str){
    let count = 0;
    let vowel_series = ['a', 'e', 'i', 'o','u'];
    for(let char of str.toLowerCase()){
        if(vowel_series.includes(char)){
            count++
        }
    }
    return count;
}