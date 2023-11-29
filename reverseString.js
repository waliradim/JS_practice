//problem - 3
// Write a function called `reverseString` that takes a string as input and returns the reverse of that string. Your function should not use the built-in `reverse()` method.
// Example Input/Output:
// - reverseString('hello') should return 'olleh'
// - reverseString('racecar') should return 'racecar'
// - reverseString('12345') should return '54321'

reverseString = (vlu) => {
  if (typeof vlu === "string") {
    let revlu = "";
    for (let i = vlu.length - 1; i >= 0; i--) {
      revlu += vlu[i];
    }
    console.log(revlu);
  } else {
    console.log("value is not a String");
  }
};
reverseString("book");
