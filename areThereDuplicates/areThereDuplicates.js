//frequency counter solution
function areThereDuplicates(...nums) {
  let object = {};
  for (let num of nums) {
    object[num] ? object[num]++ : (object[num] = 1);
  }
  for (let key in object) {
    if (object[key] > 1) {
      return true;
    }
  }
  return false;
}

//another solution
function areThereDuplicates(...nums) {
  let object = {};
  for (let num of nums) {
    if (!object[num]) {
      object[num] = 1;
    } else {
      return true;
    }
  }
  return false;
}
