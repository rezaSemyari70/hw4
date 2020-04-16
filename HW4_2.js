function diffBetween(date1 , date2){ 
    let diffYear = Math.abs(date2.getFullYear() - date1.getFullYear()) ;
    let diffMonth = (date2 > date1 && date2.getDate() < date1.getDate()) ?
        Math.abs(date2.getMonth() - date1.getMonth()) - 1 :
        Math.abs(date2.getMonth() - date1.getMonth());
    let diffDay = Math.abs(((date2.getMonth() * 30 + date2.getDate()) -
        ((date1.getMonth() * 30 + date1.getDate()))) % 30);
    let diffHour = date2.getHours() - date1.getHours() ;
    let diffMinute = Math.abs(date2.getMinutes() - date1.getMinutes()) ;
    let diffsecond = Math.abs(date2.getSeconds() - date1.getSeconds()) ;

   

    return (`{years:${diffYear} , months:${diffMonth} , days:${diffDay} , hours:${diffHour} , minutes:${diffMinute} , seconds:${diffsecond}}`) ;
}

console.log(diffBetween( new Date("2020-08-05T12:22:41") , new Date("2015-02-15T23:19:01")) );


