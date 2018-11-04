

const duplicate = (arr) => {
  const hashTable = {};
  let result = false;
  arr.some(val => {
    if(hashTable[val] >= 1){
      result = true;
      return result;
    }
    else{
      hashTable[val] = 1;
    }
  })


  return result;
}

console.log(duplicate([1,2,3,1]))
