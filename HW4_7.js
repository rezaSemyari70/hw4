function convertToPairs(obj){
    let res = [] ;
    for(let value of Object.entries(obj)){
        res.push(value) ;
    }
    return res ;
}

console.log(convertToPairs({country:"Iran", capital:"Tehran", population: "18M"}));
