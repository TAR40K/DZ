"use strict";
function calc() {
  const buttons = document.querySelectorAll(`.btn`);
  for (const btn of buttons) {
    btn.addEventListener(`click`, function () {
      const input1 = Number(document.querySelector(`#num1`).value);
      const input2 = Number(document.querySelector(`#num2`).value);
      const add = document.querySelector(`[data-action="add"]`);
      const subtract = document.querySelector(`[data-action="subtract"]`);
      const multiplay = document.querySelector(`[data-action="multiply"]`);
      const divide = document.querySelector(`[data-action="divide"]`);
      switch (btn) {
        case add:
          document.querySelector(`#resultText`).textContent = input1 + input2;
          break;
        case subtract:
          document.querySelector(`#resultText`).textContent = input1 - input2;
          break;
        case multiplay:
          document.querySelector(`#resultText`).textContent = input1 * input2;
          break;
        case divide:
          if (input2 !== 0) {
            document.querySelector(`#resultText`).textContent = input1 / input2;
            break;
          } else {
            document.querySelector(`#resultText`).textContent = `Так нельзя`;
          }
      }
      document.querySelector(`#num1`).value = ``;
      document.querySelector(`#num2`).value = ``;
    });
  }
}
calc();
