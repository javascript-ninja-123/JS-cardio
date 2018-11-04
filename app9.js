const {compose,curry} = require('Ramda');


const getUberCat = index => {
  switch(index){
    case 0:
    return "UberX";
    case 1:
    return "UberXL";
    case 2:
    return "UberPlus";
    case 3:
    return "UberBlack";
    case 4:
    return "UberSUV"
  }
}



const Uber = (mile, fares) => {
    const freeRideLimit = 20;
    const firstResult =  fares.reduce((acc,val,i) => {
      const category = getUberCat(i)
      const cost = val * mile;
      if(cost < 20){
        acc.push({
          category,
          cost
        })
      }
      return acc;
    }, [])

     return firstResult.reduce((acc,val,i) => {
      if(i === 0){
        acc = val;
        return acc;
      }
      if(val.cost > acc.cost){
        acc = val
        return acc;
      }
      return acc;
    },{})
}
//
// console.log(Uber(30, [.3,.5,.7,1.3]))

const reduce = (acc,fn, arr) => arr.reduce(fn,acc)
const curryReduce = curry(reduce)

const union = (arr1, arr2) => {
  const add = (arr2) => (acc,val,i) => {
    const newVal = val + arr2[i]
    acc.push(newVal)
    return acc;
  }
  return curryReduce([],add(arr2), arr1)
}

const curryUnion = curry(union)


const simpleifyNum = (num,arr) => {
  const a = arr.map(value => {
    return value.toFixed(num)
  })
  return a;
}

const currySimpleNum = curry(simpleifyNum)


const UberDistance = (ride_time, ride_distance, cost_perminute, cost_per_mile) => {
  const multiply = (ride_time) => (acc,val) => {
    acc.push(val * ride_time)
    return acc;
  };

  const getArray = (k) => curryReduce([],multiply(k));
  const currySimpleNum = curry(simpleifyNum)

  const w = (arr,k,num) => compose(
    (arr) => arr.map(value => Number(value)),
    currySimpleNum(num),
    getArray(k)
  )(arr)

  const time = w(cost_perminute, ride_time,1)
  const mile = w(cost_per_mile, ride_distance,1)

  return curryUnion(time,mile)
}



console.log(UberDistance(30,7, [.2,.35,.4,.45], [1.1 ,1.8,2.3,3.5]))
