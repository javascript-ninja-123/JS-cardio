const {compose} = require('ramda');

const ArrayCheck = arr => {
  if(!Array.isArray(arr)) throw new Error('it is not an Array')
}


const closeNums = (arr,k) => {
  //type check
  ArrayCheck(arr);
  const hashTable = {

  }
  let num = 1;
  let result = false;
  arr.some((val,i) => {
    if(hashTable[val]) return;
    if(Math.abs(val - arr[i + 1]) === k) {
       result = true
       return result;
    }
    else{
      hashTable[val] = true;
      hashTable[arr[i + 1]] = true;
    }
  })


  return {
    result,
    num
  };
}

console.log(closeNums([0,1,1,2,5,2,3,5,2],3))
