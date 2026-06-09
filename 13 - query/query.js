"use strict";

const query = {
  search: "Вася",
  take: 10,
};

function takeQuery(obj) {
  let searchParams = `search=${obj.search}&take=${obj.take}`;
  return searchParams;
}
console.log(takeQuery(query));
