let prices = { oficial: 0, blue: 0, cripto: 0 };

fetch("https://dolarapi.com/v1/dolares")
  .then((response) => response.json())
  .then((data) => {
    prices.oficial = data[0].venta;

    prices.blue = data[1].venta;

    prices.cripto = data[5].venta;

    textDolars();
  });

function textDolars() {
  let textOfical = document.getElementById("textOficial");
  let textBlue = document.getElementById("textBlue");
  let textCripto = document.getElementById("textCripto");
  textOfical.innerHTML = `Oficial: ${prices.oficial}`;
  textBlue.innerHTML = `Blue: ${prices.blue}`;
  textCripto.innerHTML = `Cripto: ${prices.cripto}`;
}

let checkOficial = document.getElementById("checkOficial");
let checkBlue = document.getElementById("checkBlue");
let checkCripto = document.getElementById("checkCripto");
checkOficial.value = prices.oficial;
checkBlue.value = prices.blue;
checkCripto.value = prices.cripto;

let button = document.getElementById("button");
let resultText = document.getElementById("result");
let valueConvert;

button.addEventListener("click", () => {

  let result;
  valueConvert = document.getElementById("valueConvert").value;

  if (checkOficial.checked) {
    result = valueConvert / prices.oficial;
    resultText.innerHTML = result.toFixed(2);
  }
  if (checkBlue.checked) {
    result = valueConvert / prices.blue;
    resultText.innerHTML = result.toFixed(2);
  }
  if (checkCripto.checked) {
    result = valueConvert / prices.cripto;
    resultText.innerHTML = result.toFixed(2);
  }
});
console.log(result);
