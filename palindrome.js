function palindrome(str){
    let reversed = '';
    for(let character of str ) {
        reversed = character + reversed;
    }
    return (reversed == str) ? true : false
    //return reversed;
}