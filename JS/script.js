let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateUSD = 0.93;
let ratePLN = 0.21;
let rateTRY = 0.034;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let amount = +amountElement.value;
  let currency = currencyElement.value;

  let result;
  switch (currency) {
    case "USD":
      result = amount / rateUSD;
      break;

    case "PLN":
      result = amount / ratePLN;
      break;

    case "TRY":
      result = amount / rateTRY;
      break;
  }

  resultElement.innerHTML = `${amount.toFixed(2)} EUR wynosi <strong>${result.toFixed(2)}${currency} </strong>`;
});
