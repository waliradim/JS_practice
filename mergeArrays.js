//problem - 5

mergeArrays = (ary1, ary2) => {
  let arry1 = ary1;
  let arry2 = ary2;
  let ary3 = arry1.concat(arry2).sort((a, b) => {
    return a - b;
  });

  console.log(ary3);
};

mergeArrays([2, 4, 6, 8, 10], [1, 3, 5, 7, 9]);
