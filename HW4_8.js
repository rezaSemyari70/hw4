let library = [{
        title : 'The Road Ahead',
        author : 'Bill Gates',
        libraryID : 1254 
    },
    {
        title : 'Walter Issacson',
        author : 'Steve Jobs',
        libraryID : 4264
    },
    {
        title : 'Mockingjay : The Final Book Of The Hungry Game',
        author : 'Suzanne Collins',
        libraryID : 3245 
    }];


function sortByNumericProperty(arr){
    let ans = [] ;
    let res = arr.sort((a,b) => a.libraryID > b.libraryID ? -1 : 1 ) ;
    for(let val of res){
        ans.push(val);
    }
    return ans;
}

console.log(sortByNumericProperty(library));
