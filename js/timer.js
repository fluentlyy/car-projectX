import { updateTimer, startTimer, stopFirstTimer } from "./timer-first.js";
import {
  enterName,
  buttonSubmit,
  input,
  tickModal,
  showText,
} from "./beetwen-timers.js";
import { startSecondTimer, updateSecondTimer } from "./timer-second.js";
/* import debounce from "lodash.debounce"; */

let button = document.querySelector(".modal__timer-button");
/* document.body.style.overflow = "hidden"; */

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
    }, 2100);

    /* updateSecondTimer();
    startSecondTimer(); */
  }
});
