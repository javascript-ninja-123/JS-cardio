


const firstNonRepeatingString = str => {
  let result = "_"
  const hashTable = {};
  str.split('').forEach(value => {
    if(hashTable[value]){
      return hashTable[value] += 1;
    }
    hashTable[value] = 1;
  })

  Object.keys(hashTable).some((value,i) => {
    if(hashTable[value] === 1){
      result = value;
      return true;
    }
  })

  return result;
}

console.log(firstNonRepeatingString('abacabad'))
