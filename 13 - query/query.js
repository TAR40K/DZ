const query = {
  search: "Вася",
  take: 10,
  takeQuery: function () {
    const keys = Object.keys(this); 
    const firstKey = keys[0]; 
    const secondKey = keys[1]; 
    return `${firstKey}=${this[firstKey]}&${secondKey}=${this[secondKey]}`;
  },
};

console.log(query.takeQuery()); 