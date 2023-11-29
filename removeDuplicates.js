//problem - 7

const removeDuplicates = (arry) => {
  if (Array.isArray(arry)) {
    return [...new Set(arry)];
  } else {
    console.log("not an array value");
  }
};

console.log(
  removeDuplicates([
    "Zara",
    "Sadia",
    "Mahin",
    "Adnan",
    "Maisha",
    "Adnan",
    "Faiyaz",
  ])
);

// let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

// removeDuplicates = (arr) => {
//   let unique = arr.reduce(function (acc, curr) {
//     if (!acc.includes(curr)) acc.push(curr);
//     return acc;
//   }, []);
//   return unique;
// };
// console.log(removeDuplicates(arr));
