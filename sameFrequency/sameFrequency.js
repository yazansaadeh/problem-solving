function sameFrequency(num1, num2) {
  let object1 = {};
  let object2 = {};
  while (num1 > 0) {
    let temp = num1 % 10;
    if (object1[temp]) {
      object1[temp] = object1[temp] + 1;
    } else {
      object1[temp] = 1;
    }
    num1 = Math.floor(num1 / 10);
  }
  while (num2 > 0) {
    let temp = num2 % 10;
    if (object2[temp]) {
      object2[temp] = object2[temp] + 1;
    } else {
      object2[temp] = 1;
    }
    num2 = Math.floor(num2 / 10);
  }
  for (let key of object1) {
    if (object2[key] !== object1[key]) {
      return false;
    }
  }
  return true;
}

sameFrequency(182, 281);
sameFrequency(34, 14);
sameFrequency(22, 222);
sameFrequency(3589578, 5879385);
