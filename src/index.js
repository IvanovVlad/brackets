module.exports = function check(str, bracketsConfig) {
  // your solution
  console.log(str)
  console.log(bracketsConfig)
  if (str.length % 2 != 0) return false;

  let strArray = str.split('');
  let strlength = strArray.length;
  for (let i=0; i<strlength; i++)
  {
    for (let j=0; j<bracketsConfig.length; j++)
    {
        if (strArray[i] == bracketsConfig[j][0] && strArray[i+1] == bracketsConfig[j][1])
        {
          strArray = strArray.splice(i, 2);
          strlength -= 2;
          console.log(strlength);
          if (strlength == 0)
          {
            return true;
          }
          i = 0;
        }
      }
    }
  return false;
}