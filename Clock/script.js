const hand_second = document.querySelector('.hand_second');
const hand_min = document.querySelector('.hand_min');
const hand_hour = document.querySelector('.hand_hour');

function setDate() {
    const now = new Date();
    const second = now.getSeconds();
    const secondDeg = (second/60)*360+90;
    hand_second.style.transform = `rotate(${secondDeg}deg)`;

    const min = now.getMinutes();
    const minDeg = (min/60)*360+90;
    hand_min.style.transform = `rotate(${minDeg}deg)`;

    const hour = now.getHours();
    const hourDeg = (hour/12)*360+90;
    hand_hour.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setDate, 1000)