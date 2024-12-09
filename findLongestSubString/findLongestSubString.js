function findLongestSubString(str) {
  let object = {};
  let maxLen = -Infinity;
  let start = 0;
  let end = 0;
  while (end < str.length) {
    let char = str[end];
    if (!object[char]) {
      object[char] = 1;
      end++;
      maxLen = Math.max(maxLen, end - start);
    } else {
      object[str[start]]--;
      start++;
    }
  }
  return maxLen;
}
findLongestSubString("thisisawesome");
//{t:0 , h:0 , i:0 , s:1 , a:1 , w:1 , e:1 ,o:1, m:1 ,  }
