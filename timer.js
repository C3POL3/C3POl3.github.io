const currentDate = new Date();
const targetDate = new Date('2026-05-08T00:00:00');
const interval = setInterval(updateCountdown, 1000);

console.log(currentDate);
console.log(targetDate);

function updateCountdown() {
    const currentTime = new Date();
    const difference = targetDate - currentTime;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);


    if (difference < 0) {
    clearInterval(interval);
    document.getElementById("timer").innerText = "The event has started!";
    }
    
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (difference < 0) {
    clearInterval(interval);
    document.getElementById("timer").innerText = "The event has started!";
    }
}
