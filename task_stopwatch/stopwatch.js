// script.js
let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let laps = [];
let display = document.getElementById('display');
let startStopButton = document.getElementById('startStop');
let resetButton = document.getElementById('reset');
let lapButton = document.getElementById('lap');
let lapsList = document.getElementById('laps');

startStopButton.addEventListener('click', startStop);
resetButton.addEventListener('click', reset);
lapButton.addEventListener('click', lap);

function startStop() {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        tInterval = setInterval(getShowTime, 1);
        startStopButton.innerHTML = 'Stop';
        running = true;
    } else {
        clearInterval(tInterval);
        difference = new Date().getTime() - startTime;
        startStopButton.innerHTML = 'Start';
        running = false;
    }
}

function reset() {
    clearInterval(tInterval);
    difference = 0;
    running = false;
    startStopButton.innerHTML = 'Start';
    display.innerHTML = '00:00:00.000';
    laps = [];
    updateLaps();
}

function lap() {
    if (running) {
        laps.push(display.innerHTML);
        updateLaps();
    }
}

function updateLaps() {
    lapsList.innerHTML = laps.map((lap, index) => `<li>Lap ${index + 1}: ${lap}</li>`).join('');
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % 1000));

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 10) ? "00" + milliseconds : (milliseconds < 100) ? "0" + milliseconds : milliseconds;

    display.innerHTML = hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
}
