let modal = document.querySelector(".modal__timer-body");

let currentDate = new Date();
let newDate = new Date(currentDate);
newDate.setDate(newDate.getDate() + 31);

let days = 30;
let hours = 23;
let minutes = 59;
let seconds = 59;

export function updateSecondTimer() {
  modal.innerHTML = `<h3 class="modal__timer-title">
    <span class="blue__txt">TRIAL</span> DURATION
  </h3>

  
  <span class="modal__timer-clock"
    ><span>${days}</span>:<span>${hours}</span>:<span
      >${minutes}</span 
    ><span class="second-sec">${seconds}</span></span
  >
  
  <div class="date__container">
  <p class="modal__timer-text">Trial active to:</p>
            <p class="modal__timer-date">${newDate.toLocaleDateString()}</p></div>
  `;
}

export function startSecondTimer() {
  document.body.style.overflow = "auto";
  interval = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        if (hours === 0) {
          if (days === 0) {
            clearInterval(interval);
            location.reload();
            return;
          }
          days--;
          hours = 24;
          minutes = 59;
        } else {
          hours--;
          minutes = 59;
        }
      } else {
        minutes--;
        seconds = 59;
      }
    } else {
      seconds--;
    }

    updateSecondTimer();
  }, 1000);
}
