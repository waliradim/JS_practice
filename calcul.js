// function add(n1, n2) {
//   var a = n1 + n2;
//   return a;
// }

// var res = add(5, 6);
// console.log(res);

// add = (num1, num2) => {
//   console.log(num1 + num2);
// };
// add(7, 8);

let number1 = 10;
let item = "+";
let number2 = 5;
function add() {
  let c = number1 + number2;
  console.log(number1, " + ", number2, "=  ", c);
}
function min() {
  let c = number1 - number2;
  console.log(number1, " - ", number2, "=  ", c);
}
function milti() {
  let c = number1 * number2;
  console.log(number1, " * ", number2, "=  ", c);
}
function divd() {
  let c = number1 / number2;
  console.log(number1, " / ", number2, "=  ", c);
}
switch (item) {
  case "+":
    add();
    break;
  case "-":
    min();
    break;
  case "*":
    milti();
    break;
  case "/":
    divd();
    break;

  default:
    alert("wrong inpute please Relode and input again");
    break;
}
