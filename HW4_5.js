function georgianToJalali( date){
    return (date.toLocaleDateString('fa-IR')) ; 
}

function dateToPersian(date){
    const month = ['','دی','بهمن','اسفند','فروردین','اردیبهشت','خرداد','تیر','مرداد','شهرویور','مهر','آبان','آذر'] ;

    const day = ['','یکشنبه','دوشنبه','سه‌شنبه','چهارشنبه','پنج‌شنبه','جمعه','شنبه'] ;
    let persianTime = georgianToJalali(date).split('/') ;
    // return persianTime  ;
    return `${persianTime[0]} ${day[date.getDate() ]} ${persianTime[1]} ${month[date.getMonth()]}` ;
}

console.log(dateToPersian(new Date(2020,03,02)));
console.log(dateToPersian(new Date(2020,04,01)));
