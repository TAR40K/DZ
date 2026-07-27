"use strict";

const dataArray = [
  { id: 1, name: `Вася` },
  { id: 2, name: `Петя` },
  { id: 1, name: `Вася` },
];

console.log(dataArray);

const ids = dataArray.map((array) => array.id);
console.log(ids);

const uniqueIds = new Set(ids);
console.log(uniqueIds);

const result = [...uniqueIds];

const unuqueArray = result.map((id) => {
  return dataArray.find((item) => item.id === id);
});
console.log(unuqueArray);
