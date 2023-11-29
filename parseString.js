//problem - 9

const parseString = (...vlu) => {
  let value = vlu;
  if (value.every(Number)) {
    let sum = 0;
    value.forEach((num) => {
      sum = sum + Number(num);
    });
    console.log(sum);
  } else {
    console.log(value.join(" "));
  }
  // let test = "";
  // for (const arg of value) {
  //   if (!isNaN(arg)) {
  //     test += parseInt(arg);
  //   } else {
  //     test += arg;
  //   }
  //   test += " ";
  // }
  // return test.trim();
};

parseString("21", "24", "40");
parseString("Hello", "Alpha");
parseString("Summer", "2022");
