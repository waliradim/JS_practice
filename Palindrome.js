//problem - 4
// Write a function isPalindrome that takes in a string and returns true if the string is a palindrome (reads the same forwards and backwards) and false otherwise.
// Example Input/Output:
// isPalindrome("racecar") should return true
// isPalindrome("hello") should return false
// isPalindrome("rotator") should return true
// isPalindrome("peep") should return true

isPalindrome = (vlu) => {
  if (typeof vlu === "string") {
    let revlu = "";
    for (let i = vlu.length - 1; i >= 0; i--) {
      revlu += vlu[i];
    }
    if (revlu == vlu) {
      console.log(true);
    } else {
      console.log(false);
    }
    //console.log(revlu);
  } else {
    console.log("value is not a String");
  }
};
isPalindrome("rotator");
isPalindrome("hello");
