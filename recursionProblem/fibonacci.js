function fibonacci(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(4)); // 3
console.log(fibonacci(10)); // 55
console.log(fibonacci(28)); // 317811
console.log(fibonacci(35)); // 9227465
