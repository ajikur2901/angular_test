// Expected Result : [false, true]
// Direction :
// The first value : If all of arr2 has bigger value than the biggest value of arr1;
// The second value : If some of arr2 has smaller value than the smallest value of arr1;
const arr1 = [4, 6, 2, 3, 5];
const arr2 = [1, 3, 4, 7, 9, 10];

function result(arr1, arr2) {
  // get largest value from arr2 and compare with smallest value from arr1
  let first_check = arr1.sort((a,b) => b - a)[0] < arr1.sort((a,b) => a - b)[0]
  // get smallest value from arr1 and compare with smallest value from arr2
  let second_check = arr1.sort((a,b) => a - b)[0] > arr2.sort((a,b) => a - b)[0]
  return res = [first_check, second_check];
}

console.log(result(arr1, arr2));