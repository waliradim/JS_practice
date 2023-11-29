//problem - 12

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
