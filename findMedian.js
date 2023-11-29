// problem - 17
// Write a function called "findMedian" that takes an array of numbers as input and returns the median value of the numbers.
// For example:
// Input: [5, 2, 8, 1, 9]
// Output: 5
// Input: [4, 2, 7, 1, 9, 10]
// Output: 5.5

findMedian = (arry) => {
  if (Array.isArray(arry)) {
    let sum = 0;
    arry.forEach((num) => {
      sum = sum + num;
    });
    console.log(sum / arry.length);
  } else {
    console.log("not an array value");
  }
};
findMedian([5, 2, 8, 1, 9]);
findMedian([4, 2, 7, 1, 9, 10]);
