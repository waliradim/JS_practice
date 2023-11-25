//এমন একটি ফাংশন লিখুন যেটি একটা স্ট্রিং এর কতগুলো Vowel আছে তা return করে।

text = (value) => {
  let txt = value;
  let petrn = /[aeiou]/gi;
  let newtxt = txt.match(petrn);
  return newtxt.length;
};
console.log(text("I Love my Country"));
