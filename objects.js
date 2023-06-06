// 2: Objects

const fruit = {
  name: "Apple",
  flavour: "Sweet",
  eat() {
    console.log("Yum");
    this.eaten = true;
  },
};

// console.log(fruit);

// dot notation

// console.log(fruit.name);

// bracket notation

// console.log(fruit["flavour"]);

// dynamic accessor

let propertyName = "fla" + "vour";

// console.log(fruit[propertyName]);

// fruit.eat();

// console.log(fruit);

// ... spread

const grannySmith = {
  ...fruit,
  name: "Something else",
  name: "Granny smith",
  flavour: "Tart",
  colour: "Green",
};

// console.log(grannySmith);

// Destructuring

//const flavour = grannySmith.flavour;

const { flavour: taste, colour, name, age = "something" } = grannySmith;

console.log(age);
