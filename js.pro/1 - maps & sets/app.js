"use strict";

const arrayOfArray = [
  { id: 1, name: `Вася` },
  { id: 2, name: `Петя` },
  { id: 1, name: `Вася` },
];

console.log(arrayOfArray);

const ids = arrayOfArray.map((array) => array.id);
console.log(ids);

const uniqueIds = new Set(ids);
console.log(uniqueIds);

const result = [...uniqueIds];

const unuqueArray = result.map((id) => {
  return arrayOfArray.find((item) => item.id === id);
});
console.log(unuqueArray);
