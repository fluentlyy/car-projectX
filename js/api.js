let API = `https://v1.apiplugin.io/v1/currency/9sjwJ6uH/rates`;
let selector = document.getElementById("selector");
let button = document.getElementById("submit-button");
let carWorth = document.getElementById("car-worth");
let convertedWorth = document.getElementById("converted-worth");
let list = document.querySelector(".currency__list");

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

fetch(`./CurrencyDatabase.json`, { method: "GET" })
  .then((response) => response.json())
  .then((value) => {
    value.forEach((element) => {
      let li = document.createElement("li");
      li.classList.add("list__li");
      li.innerHTML = `<img class="list__img" src="${element.flagImage}" alt=""> ${element.currencyCode}`;
      list.appendChild(li);
    });
  })
  .catch((err) => console.error(err));

/* fetch(API, { method: "GET" })
  .then((response) => response.json())
  .then((value) => {
    let liElements = document.querySelectorAll(".list__li");
    liElements.forEach((element) => {
      fetch(`./CurrencyDatabase.json`, { method: "GET" })
        .then((response) => response.json())
        .then((value) => {
          let liElements = document.querySelectorAll(".list__li");
          liElements.forEach((liElement) => {
            if (value.currencySymbol) {
              liElement.innerHTML += ` ${value.currencySymbol}`;
            }
          });
        })
        .catch((err) => console.error(err));
      let key = element.textContent.trim();
      element.innerHTML += ` ${Math.floor(value.rates[key])}`;
    });
  })
  .catch((err) => console.error(err)); */
// Виконання першого fetch для отримання курсів валют
fetch(API, { method: "GET" })
  .then((response) => response.json())
  .then((ratesData) => {
    // Виконання другого fetch для отримання даних CurrencyDatabase
    fetch(`./CurrencyDatabase.json`, { method: "GET" })
      .then((response) => response.json())
      .then((currencyData) => {
        // Обробка DOM елементів після отримання даних обох fetch
        let liElements = document.querySelectorAll(".list__li");

        liElements.forEach((element) => {
          let key = element.textContent.trim();

          // Додаємо курс валют
          if (ratesData.rates.hasOwnProperty(key)) {
            element.innerHTML += ` ${Math.floor(ratesData.rates[key])}`;
          } else {
            console.warn(`Ключ "${key}" не знайдено в rates.`);
          }

          // Знаходимо відповідний елемент у CurrencyDatabase за currencyCode
          let currency = currencyData.find((item) => item.currencyCode === key);
          if (currency && currency.currencySymbol) {
            element.innerHTML += `${currency.currencySymbol}`;
          } else {
            console.warn(
              `Символ валюти для "${key}" не знайдено в CurrencyDatabase.`
            );
          }
        });
      })
      .catch((err) => console.error("Помилка у другому fetch:", err));
  })
  .catch((err) => console.error("Помилка у першому fetch:", err));
