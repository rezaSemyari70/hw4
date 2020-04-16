 function converTimeZone(date) {
    let difMinute = date.getTimezoneOffset();
    return Date(date.getMinutes(date.getMinutes() - difMinute))
 }

 console.log(converTimeZone(new Date()));