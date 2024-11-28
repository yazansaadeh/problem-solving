function sumZero(arr) {
  let first = 0;
  let last = arr.length - 1;

  while (first < last) {
    let sum = arr[first] + arr[last];
    if (sum === 0) {
      return [arr[first], arr[last]];
    } else if (sum > 0) {
      last = last - 1;
    } else {
      first = first + 1;
    }
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
