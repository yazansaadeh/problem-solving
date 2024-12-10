function isPalindrome(str) {
  function helper(str) {
    if (str.length === 1) {
      return str;
    }
    return str[str.length - 1] + helper(str.slice(0, -1));
  }
  let reversedString = helper(str);
  return reversedString === str;
}
console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false
