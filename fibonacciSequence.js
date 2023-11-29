//problem -16

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
