const observerOptions = {
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

let prevPageButton = document.querySelector(".prev__page");
let nextPageButton = document.querySelector(".next__page");
let currentPageSpan = document.querySelector(".current__page");
let currencyList = document.querySelector(".currency__list");

let page = 1;
const itemsPerPage = 8;

let allCurrencies = [];
let currencyDetail = [];

function fetchAllCurrencies() {
  fetch(`./CurrencyDatabase.json`, { method: "GET" })
    .then((response) => {
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      allCurrencies = data;
      return fetchCurrencyDetails();
    })
    .then(() => {
      displayPage(page);
    })
    .catch((err) => {
      console.error("Помилка завантаження даних:", err);
      currencyList.innerHTML = "Помилка завантаження даних.";
    });
}
function fetchCurrencyDetails() {
  return fetch(API)
    .then((response) => response.json())
    .then((data) => (currencyDetail = data));
}
function displayPage(pageNumber) {
  currencyList.innerHTML = "";

  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const itemsForPage = allCurrencies.slice(startIndex, endIndex);

  itemsForPage.forEach((element) => {
    let li = document.createElement("li");
    li.classList.add("list__li");

    const flagImage = element.flagImage;
    const currencyCode = element.currencyCode || "N/A";
    const currencySymbol = element.currencySymbol;

    const valueCurrency = currencyDetail.rates[currencyCode];
    const roundValueCurrency = valueCurrency
      ? Number(valueCurrency.toFixed(2))
      : "N/A";

    li.innerHTML = `<img class="list__img" src="${flagImage}" alt="Прапор"> ${currencyCode} ${roundValueCurrency}${currencySymbol}`;
    currencyList.appendChild(li);

    observer.observe(li);
  });

  updatePaginationInfo();
}

function updatePaginationInfo() {
  const totalResults = allCurrencies.length;
  const totalPages = Math.ceil(totalResults / itemsPerPage);

  currentPageSpan.textContent = `${page}/${totalPages}`;

  prevPageButton.disabled = page === 1;
  nextPageButton.disabled = page === totalPages || totalPages === 0;
}

nextPageButton.addEventListener("click", function () {
  const totalPages = Math.ceil(allCurrencies.length / itemsPerPage);
  if (page < totalPages) {
    page++;
    displayPage(page);
  }
});

prevPageButton.addEventListener("click", function () {
  if (page > 1) {
    page--;
    displayPage(page);
  }
});

fetchAllCurrencies();
