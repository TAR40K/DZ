const allDices = {
  d4: 4,
  d6: 6,
  d8: 8,
  d10: 10,
  d12: 12,
  d16: 16,
  d20: 20,
};

function diceTry(dice) {
  const max = allDices[dice];
  if (!max) {
    return `Такого кубика нет`;
  }
  const result = Math.floor(Math.random() * max) + 1;
  return result;
}

console.log(diceTry(`d6`));
console.log(diceTry(`d20`));
