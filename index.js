const R = require('ramda');
const axios = require('axios');

const add =(a,b) => a + b;
const curriedAdd =  R.curry(add);
const addTwo = curriedAdd(2);

console.log(addTwo(7))



const numArray = [1,2,37,7,5,8,5,34,3,6,34,4,4,34,34,34,4];
const bigger = limit => array => array.filter(num => num > limit)


const numbers = R.compose(
  R.invert,
  R.countBy(R.identity),
  bigger(5)
)(numArray)


console.log(numbers)


const nums = [1,2,3,4,5];
const otherNums = [6,7,8,9,10]


const dobuleMap = num => num * 2

const customMap = (fn, arr) => arr.map(fn);
const curriedCustomMap = R.curry(customMap);

const numsMap = curriedCustomMap(dobuleMap);



const resultNum = numsMap(nums)

console.log(resultNum)



const fetchData = async url => {
  try{
    const {data} = await axios.get(url)
    return data;
  }
  catch(err){
    return undefined
  }
}


Promise.all([fetchData('https://jsonplaceholder.typicode.com/posts'), fetchData('https://jsonplaceholder.typicode.com/users')])
// .then(R.zip(['posts','users']))
// .then(console.log)



const regularObject = {
  west:"dsfdsa",
  location:"LA",
  personnel:{
    manager:"dsfads",
    fName:"dfa",
    lastName:"dsfas",
    salary:4000
  }
}



const salary = R.pathOr('N.A', ['personnel', 'aa'], regularObject)

console.log(salary)


const locationLens = R.lensProp('location')
// const result = R.set(locationLens, 'SF' ,regularObject)
// console.log(result)


const overResult = R.over(locationLens, (str) => 'SF', regularObject)

console.log(overResult)
console.log(regularObject)


const scream = str => `${str}!`
const upper = str => str.toUpperCase()

const convertStr = (str) => R.compose(
  scream,
  upper
)(str)

const addNumStr = str => R.compose(
  str => str + 45,
  str => str + 1223
)(str)


const resultStr = R.compose(
  convertStr,
  addNumStr
)('whatisup')

console.log(resultStr)
