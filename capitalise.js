// Capitalise First Letter
function capitalise(str){
    let words = [];
    let newArr = str.split(' ');
    for(let word of newArr){
        console.log(word);
        words.push(word[0].toUpperCase().concat(word.slice(1)))
    }
    //let newword = str[0].toUpperCase().concat(str.slice(1));
    return words.join(' ');
    }