//problem - 3

reverseString = (vlu) => {
  if (typeof vlu === "string") {
    let revlu = "";
    for (let i = vlu.length - 1; i >= 0; i--) {
      revlu += vlu[i];
    }
    console.log(revlu);
  } else {
    console.log("value is not a String");
  }
};
reverseString("book");
