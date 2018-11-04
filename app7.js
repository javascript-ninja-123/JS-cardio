const {compose} = require('ramda');


const findMaxNum = arr => Math.max(...arr);
const biggerThanMaxNum = (value,k,maxNum, count) => {
  if(value + k > maxNum){
    count++;
    return;
  }
}

const electionWinner = (arr = [], k = 0) => {
  let count = 0;
  const maxNum = findMaxNum(arr);
  arr.forEach(value => {
    if(value + k > maxNum){
      count++;
      return;
    }
  })

  return count;
}


console.log(electionWinner([2,3,5,2],3))
