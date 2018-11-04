const {compose} = require('ramda');

//helper function
const getLast3Chars = str => {
  const a = str.split('.')
  return a[a.length - 1]
};
const getDomainCatgory = str => {
  switch(str){
    case "org":
    return "organization"
    case 'com':
    return 'commerical'
    case "net":
    return "network"
    case "info":
    return "information";
    default:
    return undefined
  }
}
const getDomain = (str) => compose(
  getDomainCatgory,
  getLast3Chars
)(str)

const goDaddy = (domains = []) => {
  return domains.reduce((acc,val) => {
    const newVal = getDomain(val);
    acc.push(newVal)
    return acc;
  },[])
}



console.log(goDaddy(['en.wiki.org','codefights.com','happy.net','code.info']))
