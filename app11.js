const {compose} = require('ramda');


const w = (str) => {
  let result;
  const strArray = str.split('')
  strArray.some(value => {
    if(typeof parseInt(value) === 'number' && !Number.isNaN(parseInt(value))){
      result=  value;
      return true;
    }
  })

  return result;
}

console.log(w('var_1_int'))
