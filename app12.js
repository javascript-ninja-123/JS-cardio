


const firstDuplicate = (array = []) => {
  let result = -1;
  const hashTable = {};
  array.some(value => {
    if(hashTable[value]){
      result = value;
      return true;
    }
    hashTable[value] = true;
  })



  return result;
}


console.log(firstDuplicate([2,1,3,5,4,7]))
