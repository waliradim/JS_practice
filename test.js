let n = 5;
let string = 0;

// Upside pyramid
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = n; j > i; j--) {
    string += 1;
  }
  // printing star
  for (let k = 0; k < i * 2 - 1; k++) {
    string += 1;
  }
  string += "\n";
}
// downside pyramid
for (let i = 1; i <= n - 1; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    string += 1;
  }
  // printing star
  for (let k = (n - i) * 2 - 1; k > 0; k--) {
    string += 1;
  }
  string += "\n";
}
console.log(string);
