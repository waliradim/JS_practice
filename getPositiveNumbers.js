//problem - 10
// Given an array exists that has integers, write a function called "getPositiveNumbers" that takes the entire array as input and returns a new array containing only the positive numbers from the original array.
// Sample Input : [2, -5, 10, -3, 8, -1, 0, 7]
// Sample Output: [2, 10, 8, 7]

const getPositiveNumbers = (arry) => {
  if (Array.isArray(arry)) {
    return arry.filter((item) => item > 0);
  } else {
    console.log("not an array value");
  }
};

console.log(getPositiveNumbers([2, -5, 10, -3, 8, -1, 0, 7]));
