var input = document.querySelector(".screen");
var pantalla = document.getElementById("pantalla");
console.log(pantalla.textContent);
function addInput(value) {
    input.value += value;
}

function clearInput() {
  input.value = "";
}

function calculate() {
  try {
    input.value = eval(input.value);
  } catch (err) {
    alert("Math error");
    input.value = "";
    return;
  }
}
