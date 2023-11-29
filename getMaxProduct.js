//problem - 12
// Write a function called "getMaxProduct" that takes an array of integers as input and returns the maximum product that can be obtained by multiplying any two distinct elements from the array.
// Sample Input: [2, 3, 5, 6, 7]
// Sample Output: 42 (obtained by multiplying 6 and 7)

getMaxProduct = (arry) => {
  if (Array.isArray(arry)) {
    let newAry = arry.reverse();
    let asnwer = newAry[0] * newAry[1];
    console.log(asnwer);
  } else {
    console.log("not an array value");
  }
};

getMaxProduct([2, 3, 5, 6, 7]);
