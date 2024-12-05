const timer = document.querySelector('#timer');

let second = 0;

const displayCounter = () => {
    second++;

    if (timer) {
        const minutes = Math.floor(second / 60);
        const secs = second % 60;

        if (second < 60) {
            timer.innerHTML = "Time: " + secs + "s";
        } else if (second === 60) {
            timer.innerHTML = "Time: " + minutes + "m " + secs + "s";
        } else {
            timer.innerHTML = "Time: " + minutes + "m " + secs + "s";
        }
    }
};