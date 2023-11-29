//problem - 2

// Have the function `CountPairs` take in a string of lowercase letters and digits. The function should return the count of all pairs of characters in the string that add up to an even number.
// For example, if the input string is "a1b2c3d4e5f6", there are 3 pairs that add up to an even number: "b2", "d4", and "f6". So the function should return 3.
// If there are no such pairs, the function should return 0.
// Examples:
// - `CountPairs("a1b2c3d4e5f6")` should return 3
// - `CountPairs("x1y2z3")` should return 1
// - `CountPairs("a2b2c2d2")` should return 4

CountPairs = (vlu) => {
  if (typeof vlu === "string") {
    let findNumber = vlu.match(/\d+/g);
    let number = findNumber.map(Number);
    let pair = 0;
    // if (number[number.length - 1] % 2 == 0) {
    for (let i = 0; i < number.length; i++) {
      if (number[i] % 2 == 0) {
        pair = pair + 1;
      }
    }
    console.log(pair);
    // } else {
    //   console.log(0);
    // }
  } else {
    console.log("value is not a String");
  }
};
CountPairs("a2b2c2d2");
CountPairs("a1b2c3d4e5f6");
CountPairs("x1y2z3");

// const CountPairs = (str) => {
//   let count = 0;
//   for (let index = 0; index < str.length - 1; index++) {
//     const char1 = str[index];
//     const char2 = str[index + 1];
//     console.log(typeof char1, typeof char2);
//     let pairSum = parseInt(char1) + parseInt(char2);
//     console.log(pairSum);
//     if (pairSum % 2 === 0 && !isNaN(pairSum)) {
//       count++;
//     }
//   }
//   return count;
// };
// console.log(CountPairs("a1b2c3d4e5f6"));
