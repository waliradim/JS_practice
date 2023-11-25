// এমন একটি ফাংশন লিখুন যেটি একটি String ইনপুট নেয় এবং
//  String থেকে “a”, “c”, “z” অক্ষরগুলো বাদ দিয়ে রিটার্ন করে।

msg = (vlu) => {
  if (typeof vlu === "string") {
    let petrn = /[acz]/gi;
    if (vlu.match(petrn)) {
      let result = vlu.replace(petrn, "");
      console.log(result);
    } else {
      console.log("There are no a c z letter");
    }
  } else {
    console.log("it's not a string value");
  }
};

msg("a cow is a zombe");
