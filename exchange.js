const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const convert = document.getElementById("convert");
const result = document.getElementById("result");

const apiKey = "XWQLeZ/lvaZjogmMMb+phA==958sWAqRpexI07bS";
// const apiURL = "https://api.api-ninjas.com/v1/exchangerate?pair=GBP_";

const apiURL = `https://api.api-ninjas.com/v1/exchangerate?pair=${currency.value}_GBP`;

convert.addEventListener("click", () => {
  const amountTotal = Number(amount.value);
  //   const currencyTotal = currency.value;
  //   const url = apiURL + currencyTotal;

  const url = apiURL;

  console.log(url);

  fetch(url, {
    headers: {
      "X-API-KEY": apiKey,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const rate = data.exchange_rate;
      const resultPrice = amountTotal * rate;
      result.innerHTML = `${amountTotal} ${
        currency.value
      } = ${resultPrice.toFixed(2)} GBP`;
    })
    .catch((error) => {
      console.error(`Request failed`, error);
      result.innerHTML = "An error occured. Please try again later.";
    });
});
