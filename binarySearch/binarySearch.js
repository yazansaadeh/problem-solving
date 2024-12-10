function binarySearch(arr, num) {
  let start = 0; //5
  let last = arr.length - 1; //7
  while (start <= last) {
    let middle = Math.floor((last + start) / 2);
    if (num === arr[middle]) return middle;
    if (num > arr[middle]) start = middle + 1;
    if (num < arr[middle]) last = middle - 1;
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 4)); // Output: 3
console.log(binarySearch([1, 2, 3, 4, 5, 6], 10)); // Output: -1
console.log(binarySearch([], 1)); // Output: -1
