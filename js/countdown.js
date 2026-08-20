const daysElement = document.querySelector("#countdown-days");
const hoursElement = document.querySelector("#countdown-hours");
const minutesElement = document.querySelector("#countdown-minutes");
const secondsElement = document.querySelector("#countdown-seconds");

const eventDate = new Date ("2026-10-17T18:00:00");

function updateCountdown() {

    const now = new Date();

    const difference = eventDate - now;

    if (difference <= 0) {

        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) %60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent =seconds;
}

updateCountdown();

setInterval(updateCountdown, 1000);