// Expected Result = 55
// Direction : Return sum of array
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(input) {
  // sum value one by one using reduce
  return input.reduce((total,val) => total + val)
}

console.log(result(input));