

const createHtmlTag = str => {
  let tag;
  let originStr = str;
  str
  .replace(/[^a-z]/gi, ' ')
  .split(' ')
  .some((value) => {
    if(value !== '' && typeof value === 'string'){
      tag = value;
      return true;
    }
  })
  const autoComplete = `</${tag}>`
  return `${originStr}${autoComplete}`
}


// console.log(createHtmlTag('<button disabled>'))
//
//
// console.log(createHtmlTag('<i>'))


const {reduce$} = require('./functional');

const lockTheAccount = (password, attempts) => {
  const add = (acc,val) => {
    if(val !== password){
      acc += 1;
      return acc;
    }
    return acc;
  }
  const acc = 0;
  const result = reduce$(acc,add, attempts);
  return result >= 10

}


//
// console.log(lockTheAccount('1111', [
//   '33333','1111','2222','333','4','5','7','8','8','9','12'
// ]))




const withNum = (number, width) => {
  const widthArrayLength = width.split('').length;
  if(number === widthArrayLength) return width;
  if(widthArrayLength < number){
    let nums = 0;
    const zeros = number - widthArrayLength;
    for(let i = 0; i < zeros - 1; i++){
      nums+= '0'
    }
    return `${nums}${width}`
  }
  if(widthArrayLength > number){
    return width.substring(number);
  }
}


// console.log(withNum(6,'1234'))
//



const luckyNumber = evenNumber => {
  const evenNumberArray = evenNumber.split('');
  const firstHalf = (evenNumberArray.length / 2) -1
  const lasftHalf = evenNumber.length - 1

  let first = 0;
  let last = 0;


  const recurse = (arr,length, exit, y = true) => {
    if(length < exit) return;
    if(y){
        first += parseInt(arr[length]);
    }
    else{
      last += parseInt(arr[length]);
    }
    recurse(arr, length -1, exit, y )
  }


  recurse(evenNumberArray,firstHalf,0, true)
  recurse(evenNumberArray,lasftHalf,firstHalf + 1, false)

return first === last

}


// console.log(luckyNumber('111003'))



const isTandeom = str => {
  const strArray = str.split('')
  const strLength = strArray.length
  if(strLength % 2 !== 0) return false
  let first = '';
  let second = '';
  const middleIndex = strLength / 2
  const lastIndedx = strLength - 1;
  for(let i =0; i<middleIndex; i ++ ){
    first+= strArray[i]
  }
  for(let i =lastIndedx; i>=middleIndex; i -- ){
    second+= strArray[i]
  }
  return first === second.split('').reverse().join('')
}


// console.log(isTandeom('ww2ww2'))



const largestOfFour = (arrs) => {
    return arrs.reduce((acc,val) => {
      const newVal = Math.max(...val);
      acc.push(newVal);
      return acc;
    }, [])
}

// console.log(largestOfFour([[4,5,1,3],[13,27,18,26],[32,35,37,39],[1000,1001,857,1]]))



const largestNumber = limit => {
  let result =""
  for(let num = 0; num < limit; num++ ){
    result+= '9'
  }
  return parseInt(result);
}


console.log(largestNumber(4))
