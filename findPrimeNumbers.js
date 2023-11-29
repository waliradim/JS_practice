//problem -13
// Write a function called "findPrimeNumbers" that takes an array of positive integers as input and returns a new array containing only the prime numbers from the original array.
// For example:
// Input: [2, 3, 4, 5, 6, 7, 8, 9, 10]
// Output: [2, 3, 5, 7]

findPrimeNumbers = (arry) => {
  if (Array.isArray(arry)) {
    let prime = [];
    let isPrime = (aryElement) => {
      for (let j = 2; j < aryElement; j++) {
        if (aryElement % j == 0) {
          return false;
        }
      }
      return true;
    };
    for (let index = 0; index < arry.length; index++) {
      if (isPrime(arry[index])) {
        prime.push(arry[index]);
      }
    }
    console.log(prime);
  } else {
    console.log("not an array value");
  }
};
findPrimeNumbers([2, 3, 4, 5, 6, 7, 8, 9, 10]);
