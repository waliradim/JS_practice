//problem - 6

const findShortestWord = (str) => {
  if (typeof str === "string") {
    let wordArry = str.split(" ");
    let shortestWord = wordArry.reduce(function (a, b) {
      return a.length <= b.length ? a : b;
    });
    console.log(shortestWord);
  } else {
    console.log("value is not a String");
  }
};
findShortestWord("Hello world");
findShortestWord("The quick brown fox jumps over the lazy dog");
findShortestWord("Today is Monday");
