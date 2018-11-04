const {compose} = require('ramda');


const search = (sortedArray, searchNum) => {
  let count = 0;
  const middleIndex = Math.floor(sortedArray.length /2 );
  const middleNum = sortedArray[middleIndex]

  const recurse = (index,situation = 'up') => {
    if(index === -1 || index > sortedArray.length -1) return -1
    if(sortedArray[index] ===  searchNum) return sortedArray[index]
    if(sortedArray[index] !==  searchNum){
      if(situation === 'up'){
        return recurse(index + 1, 'up')
      }
      else{
        return recurse(index + -1, 'down')
      }
    }
  }


  if(searchNum === middleNum) return middleNum
  if(searchNum > middleNum){
    return recurse(middleNum + 1)
  }
  if(searchNum < middleNum){
    return recurse(middleNum - 1)
  }
}

console.log(search([1,2,3,4,5,6,7,8,9,19], 19))
