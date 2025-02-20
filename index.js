const countdownElement = document.getElementById('countdown');
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const inputHours = document.getElementById('inputHours');
const inputMinutes = document.getElementById('inputMinutes');
const inputSeconds = document.getElementById('inputSeconds');

const startButton = document.getElementById('startButton');

let countdownInterval;

function startTime() {
    let hours = parseInt(inputHours.value) || 0;
    let minutes = parseInt(inputMinutes.value) || 0;
    let seconds = parseInt(inputSeconds.value) || 0;

    let totalTimeSeconds = hours * 3600 + minutes * 60 + seconds;

    if (totalTimeSeconds <= 0) {
        alert('Please input a valid time!');
        return;
    }

    inputHours.value = '';
    inputMinutes.value = '';
    inputSeconds.value = '';

    countdownInterval = setInterval(() => {
        const days = Math.floor(totalTimeSeconds / 86400);
        const hours = Math.floor((totalTimeSeconds % 86400) / 3600);
        const minutes = Math.floor((totalTimeSeconds % 3600) / 60);
        const seconds = Math.floor(totalTimeSeconds % 60);

        daysElement.textContent = days.toString().padStart(2, '0');
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');

        if (totalTimeSeconds === 0) {
            clearInterval(countdownInterval);
            alert("Time's Up!");
        }
        totalTimeSeconds--;
    }, 1000);
}

startButton.addEventListener('click', () => {
    clearInterval(countdownInterval);
    startTime();
});
