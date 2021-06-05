// Expected Result : 6
// Direction : Get the total of "1" in binary value of number input
const number = 221;

function result(num) {
  // declare local variable
  let result = 0
  // loop until num is 0
  while(num > 0){
    // check num is odd or even
    if(num%2 === 1){
      // if odd, result increase by one and num value change to (num-1)/2
      result++
      num = (num-1)/2
    }else{
      // change num value to num/2
      num = num/2
    }
  }
  return result
}

console.log(result(number));