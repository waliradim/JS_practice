const findLongestWord = (str) => {
  if (typeof str === "string") {
    let wordArry = str.split(" ");
    let longestWord = wordArry.reduce(function (a, b) {
      return a.length >= b.length ? a : b;
    });
    console.log(longestWord);
  } else {
    console.log("value is not a String");
  }
};
findLongestWord("Hello world123 567");
