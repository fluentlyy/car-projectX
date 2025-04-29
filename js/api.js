let API = `https://v1.apiplugin.io/v1/currency/uLpszvfB/rates`;
let selector = document.getElementById("selector");
let button = document.getElementById("submit-button");
let carWorth = document.getElementById("car-worth");
let convertedWorth = document.getElementById("converted-worth");

fetch(`./CurrencyDatabase.json`, { method: "GET" })
  .then((response) => response.json())
  .then((value) => {
    console.log(value);
    value.forEach((element) => {
      let option = document.createElement("option");
      option.innerHTML = `${element.currencyCode}`;
      option.classList.add("selector__option");
      selector.appendChild(option);
    });
  })
  .catch((err) => console.error(err));

button.addEventListener("click", function () {
  fetch(API, { method: "GET" })
    .then((response) => response.json())
    .then((value) => {
      console.log(value);
      let key = selector.value;
      let rate = value.rates[key];
      convertedWorth.textContent = Math.floor(carWorth.value * rate);
    })
    .catch((err) => console.error(err));
});
