function mean(arr) {
  let mean = 0;
  let sum = 0;
  for(let num of arr){
    sum = num + sum;
  }
  mean = sum / arr.length;
  return mean;
}
  
function mode(arr) {
  let modeMap = {};
  let maxOccurence = 0;
  let mode = '';

  for (let num of arr) {
      if (modeMap[num]) {
      modeMap[num]++;
      } else {
      modeMap[num] = 1;
      }
  }

  for (let num in modeMap) {
    if (modeMap[num] > maxOccurence) {
    maxOccurence = modeMap[num];
    mode = num;
    }
  }

  if(arr.length === Object.keys(modeMap).length) mode = '';

  // Note: This edge case isn't handled well. A failing check is if you have something like [2,3,2,3].It should return an empty mode but it doesn't.

  return mode;

}

function median(arr){
  arr.sort(function(a, b) { return a - b});
  let median;
  if (arr.length % 2 != 0) {
    median = arr[Math.floor(arr.length / 2)];
  } else {
      let mid1 = arr[(arr.length / 2) - 1];
      let mid2 = arr[(arr.length / 2)];
      median = (mid1 + mid2) / 2;
}
return median;
}

function meanModeMedian(arr){
  return {'Mean': mean(arr), 'Mode': mode(arr), 'Median': median(arr)}
}
