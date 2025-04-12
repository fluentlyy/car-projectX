let modalBody = document.querySelector(".modal__timer-body");
let modal = document.querySelector(".modal__timer");
let headInfo = document.querySelector(".head__info");
let headInfoSubtitle = document.querySelector(".head__info-subtitle");
export let input = document.createElement("input");
input.classList.add("modal__timer-input");
export let buttonSubmit = document.createElement("button");
buttonSubmit.classList.add("timer__button-submit");
buttonSubmit.textContent = "SUBMIT";

export function tickModal() {
  modal.classList.add("modal__disappear");
  modalBody.classList.add("modal__tick-body");
  modalBody.innerHTML = `<svg class ='modal__tick' fill="#0097fa" width="100px" height="100px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#0097fa" stroke-width="0.00024000000000000003" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.011,9.011,0,0,1,12,21ZM17.737,8.824a1,1,0,0,1-.061,1.413l-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,0,1,1.415-1.414l2.323,2.323,5.294-4.853A1,1,0,0,1,17.737,8.824Z"></path></g></svg>`;
  setTimeout(() => {
    modal.style.display = "none";
  }, 2100);
}

export function enterName() {
  modalBody.innerHTML = `
  <h3 class="modal__timer-title">
              ENTER YOUR <span class="blue__txt">NAME</span>
            </h3>
            
            
  `;
  modalBody.appendChild(input);
  modalBody.appendChild(buttonSubmit);
}

export function showText() {
  let text = document.createElement("p");
  text.innerHTML = `Hi there, <span class="blue__txt">${input.value}</span> `;
  text.classList.add("head__info-greetings");
  let button = document.createElement("button");
  button.classList.add("head__info-start");
  button.textContent = `Lets get started`;
  headInfoSubtitle.classList.add("subtitle__margin");
  headInfo.classList.add("centered");
  headInfo.appendChild(text);
  headInfo.appendChild(button);
}
