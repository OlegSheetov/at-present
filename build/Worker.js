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
    const Date2 = message.data;
    self.setInterval(() => {
    const Date1 = new Date();
        // чтото не то с вычислениями вы дает не 10 дней а 10000
        postMessage(CalculateTime(Date1 , Date2));
    }, 1000);
};
