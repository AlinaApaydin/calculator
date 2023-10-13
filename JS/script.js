const calculateResult = (amount, currency) => {
  const rateUSD = 0.93;
  const ratePLN = 0.21;
  const rateTRY = 0.034;

  switch (currency) {
    case "USD":
      return amount / rateUSD;

    case "PLN":
      return amount / ratePLN;

    case "TRY":
      return amount / rateTRY;
  }
};

const updateResultText = (amount, result, currency) => {
  const resultElement = document.querySelector(".js-result");
  resultElement.innerHTML = `${amount.toFixed(
    2
  )} EUR wynosi <strong>${result.toFixed(2)}$ {currency} </strong>`;
};

const onFormSubmit = (event) => {
  event.preventDefault();

  const amountElement = document.querySelector(".js-amount");
  const currencyElement = document.querySelector(".js-currency");

  const amount = +amountElement.value;
  const currency = currencyElement.value;

  const result = calculateResult(amount, currency);

  updateResultText = (amount, result, currency);
};

const init = () => {
  const formElement = document.querySelector(".js-form");

  formElement.addEventListener("submit", onFormSubmit);
};

init();
