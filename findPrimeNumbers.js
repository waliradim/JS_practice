//problem -13

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
