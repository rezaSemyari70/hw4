function diffBetween(date1, date2) {
    let diffYear = Math.abs(date2.getFullYear() - date1.getFullYear());
    let diffMonth = (date2 > date1 && date2.getDate() < date1.getDate()) ?
        Math.abs(date2.getMonth() - date1.getMonth()) - 1 :
        Math.abs(date2.getMonth() - date1.getMonth());
    let diffDay = Math.abs(((date2.getMonth() * 30 + date2.getDate()) -
        ((date1.getMonth() * 30 + date1.getDate()))) % 30);

    return (`{years:${diffYear} , months:${diffMonth} , days:${diffDay}}`);
}

function extendDiffBetween(dates) {
    dates.sort(() => new Date() - new Date());
    return diffBetween(dates[dates.length - 1], dates[0]);
}

console.log(extendDiffBetween([
    new Date("2020-08-05T12:22"),
    new Date("2020-02-20T23:19"),
    new Date("2021-02-12T20:12"),
    new Date("2015-02-15T23:19")
]));