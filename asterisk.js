//problem - 14
// Write a program that prints a triangle asterisk (*). The number of rows in the triangle is determined by the user's input. Each row should contain a  string where the characters are repeated in a mirrored pattern.
// For example, if the user inputs 5, the program should print:
//       *
//     ***
//    ****
//   *****
//  ******

const asterisk = (inputValue) => {
  let space = "";
  for (let i = 1; i <= inputValue; i++) {
    for (let j = 0; j < inputValue - i; j++) {
      space += " ";
    }
    for (let k = 0; k < i; k++) {
      space += "*";
    }
    space += "\n";
  }
  console.log(space);
};
asterisk(5);
