

const houseOfCats = (legs) => {
  const cats  = Math.floor(legs / 4 );
  console.log(cats)
  const people = (legs -  (cats * 4) ) / 2 ;

  return [people,cats]
}

console.log(houseOfCats(6))
