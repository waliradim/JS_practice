//problem - 4

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
