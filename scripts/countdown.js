const countDownDate = new Date("Mar 18, 2021 17:00:00").getTime();

const x = setInterval(function() {

    const now = new Date().getTime();

    const timeleft = countDownDate - now;

    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    if (days <= 9) {
        days = "0" + days;
    }

    if (hours <= 9) {
        hours = "0" + hours;
    }

    if (minutes <= 9) {
        minutes = "0" + minutes;
    }

    if (seconds <= 9) {
        seconds = "0" + seconds;
    }

    document.querySelector(".countdown-hc4").innerHTML = days + "d " + hours + ":" + minutes + ":" + seconds;

    if (timeleft < 0) {
        clearInterval(x);
        document.querySelector(".countdown-hc4").innerHTML = "EXPIRED";
    }
}, 1000);