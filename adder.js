const adder = (...nums) => {
  return nums.reduce((total, num) => (total + num), 0);
}

// const adder = (a, b, c) => {
//   return (a || 0) + (b || 0) + (c || 0);
// }

module.exports = adder;