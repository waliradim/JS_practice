//problem - 9
// Write a Javascript Program that takes String as a parameter and checks if the parameters are number or text. If the parameters are numbers then it will return a summation of the numbers. If the parameters are not numbers then it will generate a text by concatenating the strings.
// Sample Input:
// parseString(“21” , “24’ , “40”)
// parseString(“Hello” , “Alpha”)
// parseString(“Summer” , “2022”)
// Sample Output:
// 85
// Hello Alpha
// Summer 2022

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
