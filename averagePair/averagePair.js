function averagePair(arr, avg) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    if ((arr[start] + arr[end]) / 2 > avg) {
      end = end - 1;
    } else if ((arr[start] + arr[end]) / 2 < avg) {
      start = start + 1;
    } else {
      return true;
    }
  }
  return false;
}
averagePair([1, 2, 3], 2.5);
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);
averagePair([-1, 0, 3, 4, 5, 6], 4.1);
averagePair([], 4);
