const [addNums, addManyNums] = require("./timing-benchmarks-pt1.js");

// Runs `addNums` in 10 increasing increments
function addNums10(increment, count = 0) {
  if (count === 10) return [];
  let sum = 0;
  for (let i = 1; i <= increment; i++)
    sum += i;
  count += 1
  if (increment < 10) {
    return [sum].concat(addNums10(increment + 1, count))
  } else {
    return [sum].concat(addNums10(increment + 10, count))
  }
}
// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  let length = increment >= 10 ? 100 : 10
  let res = []
  for (let i = increment; i <= length; i += increment < 10 ? 1 : 10) {
    let thisRes = addNums10(increment)
  }
  console.log(res)
  return res
}


module.exports = [addNums10, addManyNums10];
