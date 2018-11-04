

const extracEachKth = (arr = [], k =0) => {
  return arr.filter((value,i ) => (i + 1) % k !== 0)
}


console.log(extracEachKth([1,2,3,4,5,6,7,8,9,10], 2))
