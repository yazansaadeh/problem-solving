function flatten(arr) {
  let newArr = [];
  function helper(arr) {
    if (arr.length === 0) return;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "object") {
        helper(arr[i]);
      } else {
        newArr.push(arr[i]);
      }
    }
  }
  helper(arr);
  return newArr;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
