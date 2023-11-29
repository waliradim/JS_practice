//problem - 5
// Write a function `mergeArrays` that takes in two arrays of integers and returns a new array that contains all the elements from both arrays, sorted in ascending order.
// For example, if the two input arrays are:
// [1, 3, 5, 7, 9]
// [2, 4, 6, 8, 10]
// The function should return the following array:
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Example Input/Output:
// - mergeArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]) should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// - mergeArrays([2, 4, 6, 8, 10], [1, 3, 5, 7, 9]) should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// - mergeArrays([1, 2, 3], [4, 5, 6]) should return [1, 2, 3, 4, 5, 6]

mergeArrays = (ary1, ary2) => {
  let arry1 = ary1;
  let arry2 = ary2;
  let ary3 = arry1.concat(arry2).sort((a, b) => {
    return a - b;
  });

  console.log(ary3);
};

mergeArrays([2, 4, 6, 8, 10], [1, 3, 5, 7, 9]);
