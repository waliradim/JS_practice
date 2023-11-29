//problem - 6
// Write a function called `findShortestWord` that takes in a string as a parameter and returns the shortest word in the string. If there are two or more words that are the same length and shortest, return the first word from the string with that length. Ignore punctuation and assume the string will not be empty. Words may also contain numbers.
// For example, if the input string is "The quick brown fox jumps over the lazy dog", the function should return "The".
// Example Input/Output:
// - findShortestWord("The quick brown fox jumps over the lazy dog") should return "The"
// - findShortestWord("Hello world") should return "world"
// - findShortestWord("Today is Monday") should return "is"

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
