//problem - 10

const getPositiveNumbers = (arry) => {
  if (Array.isArray(arry)) {
    return arry.filter((item) => item > 0);
  } else {
    console.log("not an array value");
  }
};

console.log(getPositiveNumbers([2, -5, 10, -3, 8, -1, 0, 7]));
