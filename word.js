//এমন একটি ফাংশন লিখুন যেটি একটা String এ কতগুলো শব্দ আছে তা return করে।

txt = (test) => {
  let text = test;
  let newtext = text.split(" ");
  let count = newtext.length;
  return count;
};
console.log(txt("I Love my Counter"));
