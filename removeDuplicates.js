//problem - 7
// Suppose you are building a student database for your class that will track student’s names and their marks. Your class has 40 students but now you are seeing that there are 41 entries in your database so you decide to check the database. And you find out that you have mistakenly uploaded a student’s name twice.
// Task
//  Write a `removeDuplicates` function that takes in an array of names and returns a new array with any duplicates removed.
// Sample Input:
// Student_names = [‘Zara’, ‘Sadia’ , ‘Mahin’ , ‘Adnan’ , ‘Maisha’, ‘Adnan’, ‘Faiyaz’]
// Sample Output :
// Student_names = [‘Zara’, ‘Sadia’ , ‘Mahin’ , ‘Adnan’ , ‘Maisha’, ‘Faiyaz’]

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
