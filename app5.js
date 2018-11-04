

const differentSymbolsNaives = str => {
  const hashTable = {};
  str.split('').forEach(value => {
    if(hashTable[value]){
      return
    }
    hashTable[value] = true;
  })

  return Object.keys(hashTable).length
}


console.log(differentSymbolsNaives('cabca'))
