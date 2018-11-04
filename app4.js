



const convertString = (str,t) => {
  const hashTable = t.split('').reduce((acc,val) => {
    acc[val] = val
    return acc;
  },{})

  const semiResult = str.split('').reduce((acc,val) => {
    if(val === hashTable[val]){
      acc += val;
      return acc
    }
    return acc;
  },'')

  return t === semiResult
}


console.log(convertString('a2b2c2', 'abc'))
