"use strict";

const query = {
  search: "Вася",
  take: 10,
  get: 5,
};

function takeQuery(obj) {
  console.log(obj);
  return Object.keys(obj)
    .map((key) => {
      return `${[key]}=${obj[key]}`;
    })
    .join(`&`);
}
console.log(takeQuery(query));
