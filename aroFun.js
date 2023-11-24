let person = {
  name: "radim",
  age: "28",
  interest: ["game", "travle", "ride"],
  printInt() {
    this.interest.forEach((element) => {
      console.log("it is " + this.name + element);
    });
  },
};

console.log(person);
