
const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("h1");

const hourHand = document.querySelector('.hand-hour');
const minuteHand = document.querySelector('.hand-minute');
const secondHand = document.querySelector('.hand-seconds');

function getTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegree = (((seconds / 60) * 360) + 90);
    secondHand.style.transform = `rotate(${secondsDegree}deg)`

    const minutes = now.getMinutes();
    const minutesDegree = (((minutes / 60) * 360) + 90);
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`


    const hours = now.getHours();
    const hoursDegree = (((hours / 60) * 360) + 90) + 15*10;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`

    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
      }:${seconds < 10 ? `0${seconds}` : seconds}`;

}

function init() {
getTime();
setInterval(getTime, 1000);
}

init();
