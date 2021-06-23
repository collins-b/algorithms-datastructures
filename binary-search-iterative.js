function binarySearch(numArray, key) {
 let l = 0;
 let h = numArray.length - 1;
 
 while(l <= h) {
     let mid = Math.floor((l + h) / 2);
     if(key === numArray[mid] ) {
         return mid;
     }
     
     if(key < numArray[mid] ) {
         h = mid - 1;
     }
     else {
         l = mid + 1;
     }
 }
 return -1;
}
