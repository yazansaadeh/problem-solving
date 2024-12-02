// function isSubSequence(str1, str2) {
//   for (let char of str1) {
//     if (str2.includes(char)) {
//       let temp = str2.indexOf(char);
//       str2 = str2.slice(temp + 1);
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

function isSubSequence(str1, str2) {
  let i = 0;
  for (let char of str2) {
    if (char === str1[i]) {
      i++;
    }
    if (i === str1.length) {
      return true;
    }
  }
  return false;
}

isSubSequence("hello", "hello word");
isSubSequence("sing", "sting");
isSubSequence("abc", "abracadabra");
isSubSequence("abc", "acb");
