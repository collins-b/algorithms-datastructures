function solution(N) {
    let bin = (N).toString(2),
    max = 0,
    curr;
    for(let i = 0; i <= bin.length; i++){
      curr = 0;
      while(bin[i] === "0"){
        ++curr && ++i
      }
      if (bin[i] === '1' ) max = Math.max(max, curr);
    }
    return max;
  }