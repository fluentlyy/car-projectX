let modal = document.querySelector(".modal__timer-body");
let modalModal = document.querySelector(".modal__timer");
let modalArr = document.createElement("div");
modalArr.classList.add("modal__arrow");
modalArr.innerHTML = `
  <svg
    width="32px"
    height="32px"
    viewBox="-1.8 -1.8 21.60 21.60"
    xmlns="http://www.w3.org/2000/svg"
    fill="#000000"
    stroke="#000000"
    stroke-width="0.00018"
    transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke="#CCCCCC"
      stroke-width="0.36"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        fill="#ffffff"
        d="M13.7 10.29l-4-4a1.012 1.012 0 0 0-1.418 0l-4 4A1 1 0 0 0 5.007 12H13a1 1 0 0 0 .7-1.71z"
      ></path>
    </g>
  </svg>
`;
modalArr.addEventListener("click", function () {
  modalModal.classList.toggle("modal__appear");
  modalArr.classList.toggle("arr_rotate");
});

let currentDate = new Date();
let newDate = new Date(currentDate);
newDate.setDate(newDate.getDate() + 31);

let days = 30;
let hours = 23;
let minutes = 59;
let seconds = 59;

export function updateSecondTimer() {
  modalModal.classList.add("modal__height");
  modalModal.classList.remove("modal__disappear");
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
  modalModal.appendChild(modalArr);
}

export function startSecondTimer() {
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

export function lodashTimer() {
  let timeout;

  window.addEventListener(
    "scroll",
    _.throttle(function () {
      modalModal.classList.add("modal__hidden");

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        modalModal.classList.remove("modal__hidden");
      }, 300);
    }, 200)
  );
}

lodashTimer();
