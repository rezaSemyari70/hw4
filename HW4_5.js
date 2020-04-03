function georgianToJalali( date){
    return (date.toLocaleDateString('fa-IR')) ; 
}

function dateToPersian(date){
    const month = [    '' , 'فروردین'   , 'اردیبهشت' , 'خرداد' , 
                    'تیر' , 'مرداد'     ,'شهریور'    ,'مهر'     , 
                    'آبان', 'آذر'       , 'دی'       , 'بهمن'  , 'اسفند'] ;

    const day = ['یکشنبه'  ,  'دوشنبه'   ,  'سه‌شنبه' , 
                'چهارشنبه' , 'پنج‌شنبه' , 'جمعه' , 'شنبه' ] ;

    // let utcTime = date.split('/').map(item => +item);
    let persianTime = georgianToJalali(date).split('/').map(item => +item) ;
    return `${persianTime[0]} ${month[persianTime[1]]} ${persianTime[2]}, ${day[date.getDay()]}`
}

console.log(dateToPersian(new Date("2020/03/02")));
