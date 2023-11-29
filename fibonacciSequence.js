//problem -16
// A Fibonacci number is a sequence of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1. In mathematical terms, the Fibonacci sequence is defined as:
// F(n) = F(n-1) + F(n-2) for n > 1
// So, the Fibonacci sequence begins as follows: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, and so on. Each subsequent number in the sequence is the sum of the two preceding numbers. The Fibonacci sequence has numerous mathematical properties and applications in various fields, including mathematics, computer science, and nature.
// Task 1:
// Write a function called "fibonacciSequence" that takes a positive integer n as input and returns an array containing the first n numbers in the Fibonacci sequence.
// Sample Input: 8
// Sample Output: [0, 1, 1, 2, 3, 5, 8, 13]
// Task 2: Write a function called "isFibonacciNumber" that takes a number as input and returns true if the number is a Fibonacci number, and false otherwise.
// For example:
// Input: 8
// Output: true
// Input: 10
// Output: false

let fibonacciSequence = (value) => {
  let f1 = 0;
  let f2 = 1;
  let series = [f1, f2];
  for (let i = 2; i < value; i++) {
    let f3 = f1 + f2;
    series.push(f3);
    f1 = f2;
    f2 = f3;
  }
  return series;
};

let isFibonacciNumber = (inputValue) => {
  let f1 = 0;
  let f2 = 1;
  let series = [f1, f2];
  for (let i = 2; i < inputValue; i++) {
    let f3 = f1 + f2;
    series.push(f3);
    f1 = f2;
    f2 = f3;
  }
  return series.includes(inputValue);
};

console.log(fibonacciSequence(8));
console.log(isFibonacciNumber(10));
