//problem -11
// Write a function called "findMissingNumber" that takes an array of consecutive integers from 1 to n, with one number missing, and returns the missing number.
// For example:
// Input: [1, 2, 3, 5, 6, 7, 8]
// Output: 4

const findMissingNumber = (arry) => {
  if (Array.isArray(arry)) {
    let missingNumber = 0;
    let newAry = [];
    for (let index = 1; index < arry.length; index++) {
      newAry.push(index);
    }
    for (let i = 0; i < newAry.length; i++) {
      if (newAry[i] !== arry[i]) {
        missingNumber = newAry[i];
        break;
      }
    }
    console.log(missingNumber);
  } else {
    console.log("not an array value");
  }
};
findMissingNumber([1, 2, 3, 5, 6, 7, 8]);
