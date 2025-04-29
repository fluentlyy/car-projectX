import { updateTimer, startTimer, stopFirstTimer } from "./timer-first.js";
import {
  enterName,
  buttonSubmit,
  input,
  tickModal,
  showText,
} from "./beetwen-timers.js";
import {
  startSecondTimer,
  updateSecondTimer,
  lodashTimer,
} from "./timer-second.js";

let button = document.querySelector(".modal__timer-button");

updateTimer();
startTimer();

button.addEventListener("click", function () {
  stopFirstTimer();
  enterName();
});

buttonSubmit.addEventListener("click", function () {
  if (input.value.length < 2) {
    alert("Type your name!");
  } else {
    tickModal();
    setTimeout(() => {
      showText();
      updateSecondTimer();
      startSecondTimer();
      lodashTimer();
    }, 2100);
  }
});
