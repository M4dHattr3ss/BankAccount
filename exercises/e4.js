// EXERCISE 4
// Return the MIN and the MAX value in the given array of numbers
// findMinValueInArray([2, 45, 32, 3, 0, 46, 12]) => 0
// findMaxValueInArray([2, 45, 32, 3, 0, 46, 12]) => 46

export function findMinValueInArray(array) {
  // Your code goes here...
  let number = 0;
  let number2 = 0;
  let min = 0;
  for (let i = 0; i < array.length; i++){
    number = array[i];
    number2 = array[i + 1];
    if (number < number2){
      min = number;
    }
    if(number2 < number){
      min = number2;
    }
  }
  return min;
}

export function findMaxValueInArray(array) {
  // Your code goes here...
  let number = 0;
  let number2 = 0;
  let max = 0;
  for (let i = 0; i < array.length; i++){
    number = array[i];
    number2 = array[i + 1];
    if (number > number2){
      max = number;
    }
    if(number2 > number){
      max = number2;
    }
  }
  return max;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
