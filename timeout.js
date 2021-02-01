setTimeout(function () {
    console.log('Here is your pizza')
}, 3000);


setInterval(function () {
    const now = new Date();
    // console.log(now)
}, 1000)
clearInterval()

const timer = function () {
    let time = 5;
    const countDownTimer = setInterval(function () {
        console.log(time)
        time--;

        if (time === 0) {
            clearInterval(countDownTimer)
        }

    }, 1000);
};
timer();