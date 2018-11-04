const {compose,curry}  = require('ramda');

const reduce = (fn,acc,arr) => arr.reduce(fn, acc);
const curryReduce = curry(reduce);
const split = str => str.split('');
const zip = (acc,val) => {
  if(acc[val]){
    acc[val] = acc[val] + 1;
    return acc;
  }
  acc[val] = 1;
  return acc;
}

const zipReduce = acc => curryReduce(zip,acc)

const stringify =  str =>  compose(
  zipReduce({}),
  split
)(str)

const compareAndChoseSmaller = (a,b) => {
  if(a == undefined || b == undefined){
    return 0;
  }
  const result = a > b ? b : a
  return Number.isNaN(result) ? 0 : result;
}

//linear 
const commonCharacter = (str1,str2) => {
  //2n linear
  const a = stringify(str1)
  const b = stringify(str2)
  // 1n
  return Object.keys(a).reduce((acc,val) => {
    const result =compareAndChoseSmaller(a[val], b[val])
    return acc + result
  },0)
}

console.log(commonCharacter('aaabcc','adcaa'))
