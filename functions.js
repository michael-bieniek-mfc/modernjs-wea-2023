// 1 Function declaration

greetUser("Michael");

function greetUser(userName) {
  //console.log("Hi there, " + userName);

  // String interpolation example ``
  console.log(`Hi there, ${userName}`);
}

// 2 Function expression

const myFunc1 = function () {
  // do something;
  console.log("A function expression");
};

myFunc1();

// 3 Function constructor (special, rare)
// We'll see this more when talking about classes
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Looks kind of like class initialization
const myPerson = new Person("Jim", "Bob");
console.log(myPerson);

// 4 Arrow functions

const greet2 = (userName) => `Hi there, ${userName}`;

const apple = {
  eaten: false,
  eat() {
    this.eaten = true;
    console.log("Yum");
  },
  // don't do this! Arrow functions don't make good object methods because of
  // the "this" keyword
  eat2: () => {
    this.eaten = true;
    console.log("Yum");
  },
};

//apple.eat();
apple.eat2();

// Closures

function closureExample(msg) {
  // when defined, this function "closes over" its lexical context, remembering that
  // there was a "msg" variable in the outerscope.
  function innerFunction() {
    console.log(msg);
  }

  return innerFunction;
}

const msg = "Hi there";
const returnedFunc = closureExample(msg);
returnedFunc();
// returnedFunc();
//console.log(apple);

/**
 * Array methods
 */

const myGrades = [90, 99, 78, 67, 100];

const myDoubledGrades = myGrades.map((x) => x * 2);

console.log(myGrades);
console.log(myDoubledGrades);

const myAGrades = myGrades.filter((element) => element >= 80);
console.log(myAGrades);

const mySummedGrades = myGrades.reduce((accum, curr) => accum + curr, 0);
console.log(mySummedGrades);

const sortedGrades = myGrades.sort((a, b) => b - a);
console.log(sortedGrades);
/*
// Full example:
function doubleValue(x) {
    return x*2;
}

myGrades.map(doubleValue)
*/
