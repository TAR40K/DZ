const dateArray = [
  "10-02-2022",
  "тест",
  "11/12/2023",
  "00/13/2022",
  "41/12/2023",
];

onlyDates = dateArray
  .filter((string) => {
    return string.includes(`-`) || string.includes(`/`);
  })
  .map((string) => {
    if (string.includes(`-`)) {
      return string.split(`-`);
    } else if (string.includes(`/`)) {
      const parts = string.split(`/`);
      return [parts[1], parts[0], parts[2]]
    }
  })
  .filter((string) => {
    if (string[1] <= 12 && string[1] > 0 && string[0] < 31) {
      return string
    }
  })
  .map((string) => {
    return string.join(`.`)
  })
console.log(onlyDates);
