const {curry} = require('ramda');

const _reduce = (acc,fn,arr) => arr.reduce(fn,acc)
const reduce$ = curry(_reduce);


module.exports = {
  reduce$
}
