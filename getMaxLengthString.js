const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  //code here
  let maxLengthIndex =[]
  let maxIndex =[]
  let result = []

  if(arrayOfString === undefined || arrayOfString === null) {
    return undefined
  }
  for(let i=0; i < arrayOfString.length;i++) {
    maxLengthIndex[i] = arrayOfString[i].length
  }
  for(let i=0; i < maxLengthIndex.length;i++) {
    if(maxLengthIndex[i] === Math.max(...maxLengthIndex)) {
      maxIndex.push(i)
    }
  }

  for (let i = 0; i < maxIndex.length; i++) {
    result[i] = arrayOfString[maxIndex[i]]
  }
  return result
}
module.exports = getMaxLengthString
