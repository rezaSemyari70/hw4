function specificRange(num){
    let baseRange = [1,100];
    let range = [1,5] ;
    return (num + "in (1~100) Range; is " + 
    num*(range[1] - range[0] + 1)/(baseRange[1] - baseRange[0] + 1) + 
    " in (1~5) Range")
}

console.log(specificRange(70));


