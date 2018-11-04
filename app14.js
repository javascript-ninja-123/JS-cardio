


const flattenArray = array => {
  const result = [];
  const recurse = (array) => {
    array.forEach(value => {
      if(Array.isArray(value)){
        recurse(value)
      }
      else{
        result.push(value)
      }
    })
  }
  recurse(array);
  return result;
}


console.log(flattenArray([1,2,3,[1,2],[1,2,3, [1,2,3]]]))
