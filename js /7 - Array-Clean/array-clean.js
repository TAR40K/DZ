function deleteFunction(num) {
  return num < 0;
}

function filter(fnDelete, arr) {
  let removed = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (fnDelete(arr[i])) {
      removed.push(arr[i]);
      arr.splice(i, 1);
    }
  }

  return { kept: arr, removed };
}

let array = [1, 5, 10, -2, 3, -4];
let result = filter(deleteFunction, array);

console.log(result.kept);
console.log(result.removed);
