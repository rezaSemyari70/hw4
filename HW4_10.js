function addMinute(date , minute){
    let myDate = date ;
    myDate.setMinutes( myDate.getMinutes(minute) );
    return myDate;
}

console.log( addMinute( new Date(2014,2,10) , 30) );
