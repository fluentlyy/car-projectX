let hoursText = document.getElementById("hours");
let minutesText = document.getElementById("minutes");
let secondsText = document.getElementById("seconds");

let interval;

let hours = 0;
let minutes = 10;
let seconds = 0;

export function updateTimer() {
  document.body.style.overflow = "hidden";
  hoursText.textContent = "0" + hours;
  if (minutes < 10) {
    minutesText.textContent = "0" + minutes;
  }
  secondsText.textContent = seconds;
  if (seconds < 10) {
    secondsText.textContent = "0" + seconds;
  }
}

export function startTimer() {
  interval = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        if (hours === 0) {
          clearInterval(interval);
          location.reload();
          return;
        }
        hours--;
        minutes = 59;
        seconds = 59;
      } else {
        minutes--;
        seconds = 59;
      }
    } else {
      seconds--;
    }
    updateTimer();
  }, 1000);
}
export function stopFirstTimer() {
  clearInterval(interval);
}
