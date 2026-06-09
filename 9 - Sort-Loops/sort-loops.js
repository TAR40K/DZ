const arr = [1, 40, -5, 10, 0];
/// [-5, 0, 1, 10, 40]

function sort(arr) {
  const sortArr = arr;
  for (ind in arr) {
    for (idx in arr) {
      console.log(arr[ind], arr[idx]);
      if (arr[ind] >= arr[idx]) {

      }
    }
  }
  return sortArr;
}
sort(arr);
