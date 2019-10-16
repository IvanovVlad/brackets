module.exports = function check(str, bracketsConfig) {
  // your solution
  let strArray = str.split('');
  let strlength = strArray.length;
  for (let i = 0; i < strlength; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (strArray[i] == bracketsConfig[j][0] && strArray[i + 1] == bracketsConfig[j][1]) {
        strArray.splice(i, 2);
        strlength -= 2;
        i = 0;
      }
    }
  }
  if (strlength == 0) {
    return true;
  }
  else {
    for (let i = 0; i < strlength; i++) {
      for (let j = 0; j < bracketsConfig.length; j++) {
        if (strArray[i] == bracketsConfig[j][0] && strArray[i + 1] == bracketsConfig[j][1]){
          strArray.splice(i, 2);
          strlength -= 2;
          i = 0;
        }
      }
    }
    if (strlength == 0) {
      return true;
    }
    return false;
  }
}