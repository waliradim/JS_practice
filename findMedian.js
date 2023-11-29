// problem - 17

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
