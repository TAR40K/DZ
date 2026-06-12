"use strict";

const leftInput = document.querySelector(`.input_left`);
const rightInput = document.querySelector(`.input_right`);
const output = document.querySelector(`.output`);
const plusBtn = document.querySelector(`.button_plus`);
const minusBtn = document.querySelector(`.button_minus`);
const divideBtn = document.querySelector(`.button_divide`);
const multiplyBtn = document.querySelector(`.button_multiply`);

// function plus() {
//   const num1 = Number(leftInput.value);
//   const num2 = Number(rightInput.value);
//   const result = num1 + num2;
//   output.value = result;
// }
// function minus() {
//   const num1 = Number(leftInput.value);
//   const num2 = Number(rightInput.value);
//   const result = num1 - num2;
//   output.value = result;
// }
// function divide() {
//   const num1 = Number(leftInput.value);
//   const num2 = Number(rightInput.value);
//   const result = num1 / num2;
//   output.value = result;
// }
// function multiply() {
//   const num1 = Number(leftInput.value);
//   const num2 = Number(rightInput.value);
//   const result = num1 * num2;
//   output.value = result;
// }

// plusBtn.addEventListener("click", plus);
// minusBtn.addEventListener("click", minus);
// divideBtn.addEventListener("click", divide);
// multiplyBtn.addEventListener("click", multiply);

function calculate(operation) {
  const num1 = Number(leftInput.value);
  const num2 = Number(rightInput.value);

  let result;

  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "/":
      result = num2 === 0 ? `Ошибка` : num1 / num2;
      break;
    case "*":
      result = num1 * num2;
      break;
  }

  output.value = result;
  leftInput.value = "";
  rightInput.value = "";
}

plusBtn.addEventListener("click", () => calculate("+"));
minusBtn.addEventListener("click", () => calculate("-"));
divideBtn.addEventListener("click", () => calculate("/"));
multiplyBtn.addEventListener("click", () => calculate("*"));
