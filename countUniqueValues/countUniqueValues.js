function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  let j = 1;
  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j++;
    } else {
      i++;
      arr[i] = arr[j];
      j++;
    }
  }
  i = i + 1;
  return i;
}

console.log([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
