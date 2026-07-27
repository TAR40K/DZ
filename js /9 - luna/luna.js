let card = `4561-2612-1234-5464`;

const luna = (card) => {
  result = card
    .replaceAll(/[-]/g, "")
    .split("")
    .map((num, i) => {
      if (i % 2 === 0) {
        let doubled = num * 2;
        if (doubled > 9) {
            return doubled - 9
        } return doubled;
      } else {
        return num;
      }
    })
    .map(Number)
    .reduce((acc, num) => {
        return acc + num
    }, 0)

  console.log(result);

  if (result % 10 === 0) {
    return `Валидная карта`;
  } else {
    return `Невалидная карта`;
  }
};
console.log(luna(card));
