"use strict";
function calc() {
  const buttons = document.querySelectorAll(`.btn`);
  for (const btn of buttons) {
    btn.addEventListener(`click`, function () {
      const input1 = Number(document.querySelector(`#num1`).value);
      const input2 = Number(document.querySelector(`#num2`).value);
      const result = document.querySelector(`#resultText`);
      const add = document.querySelector(`[data-action="add"]`);
      const subtract = document.querySelector(`[data-action="subtract"]`);
      const multiplay = document.querySelector(`[data-action="multiply"]`);
      const divide = document.querySelector(`[data-action="divide"]`);
      const exponentiation = document.querySelector(
        `[data-action="exponentiation"]`,
      );
      const clear = document.querySelector(`[data-action="clear"]`);
      if (
        document.querySelector(`#num1`).value === "" ||
        document.querySelector(`#num2`).value === ""
      ) {
        result.textContent = `Заполни оба поля!`;
        return;
      }
      switch (btn) {
        case add:
          result.textContent = input1 + input2;
          break;
        case subtract:
          result.textContent = input1 - input2;
          break;
        case multiplay:
          result.textContent = input1 * input2;
          break;
        case divide:
          if (input2 !== 0) {
            result.textContent = input1 / input2;
            break;
          } else {
            result.textContent = `Так нельзя`;
            break;
          }
        case exponentiation:
          result.textContent = input1 ** input2;
          break;
        case clear:
          document.querySelector(`#num1`).value = ``;
          document.querySelector(`#num2`).value = ``;
          break;
      }
      document.querySelector(`#num1`).value = ``;
      document.querySelector(`#num2`).value = ``;
    });
  }
}
calc();
