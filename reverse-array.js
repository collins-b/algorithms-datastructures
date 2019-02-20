function reverseArr(arr){
    let reversed = '';
    for(let item of arr) {
      reversed =  item + reversed;
    }
    arr = reversed.split('');
    return arr;
  }