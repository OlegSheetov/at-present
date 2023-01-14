function CalculateTime(start, end) {
    const timeleft = end - start;
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000),
        minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)),
        hours = Math.floor(
            (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        days = Math.floor(timeleft / (1000 * 60 * 60 * 24));

    let result = {
        Days: days,
        Hours: hours,
        Minutes: minutes,
        Seconds: seconds,
    };
    return result;
}

onmessage = (message) => {
    const Date2 = message.data[1];
    const result = 'hello world '
    postMessage(result);
    //self.setInterval(() => {
    //const Date1 = new Date();
    //console.log(CalculateTime(Date1, Date2));
    //}, 1000);
};
