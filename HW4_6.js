function subsetString(str){
  let res = [];
  for(let i = 0; i < str.length; i++){
    for(let j = i + 1; j <= str.length ; j++){
      res.push(str.split('').slice(i,j).join('')) ;
    }  
  }
  return res ;
}

console.log(subsetString("dog"));
