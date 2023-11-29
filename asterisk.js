//problem - 14

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
