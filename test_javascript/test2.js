// Expected result : [7, 3, 1, 2, 5, 6, 9, 10, 4, 8]
// Direction : Mutate arr1 to return combined array with arr2. The conditions are :
// 1. odd number at beginning 
// 2. even number at the end of array 
// 3. Original arr1 at the middle

const arr1 = [1, 2, 5, 6, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(arr1, arr2) {
  // filter value from arr2 where not exist in arr1 and result of modulus 2 is 1
  let odd = arr2.filter((val) => {
    if(val%2 === 1 && arr1.find(v => v === val) === undefined) return val
  })
  // filter value from arr2 where not exist in arr1 and result of modulus 2 is 0
  let even = arr2.filter((val) => {
    if(val%2 === 0 && arr1.find(v => v === val) === undefined) return val
  })
  //sort array
  odd.sort((a,b) => b-a)
  even.sort((a,b) => a-b)

  // merge odd,arr1, and even array to 1 array and return it
  return odd.concat(arr1,even)
}

console.log(result(arr1, arr2));