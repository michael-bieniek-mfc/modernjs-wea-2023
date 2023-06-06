// Variables, scopes, hoisting

// Global scope
var x = 5;

if (true) {
  var z = 10;
  // perfectly fine
  console.log(z);
}

// Should z be accessible?
console.log(z);

//myFunc();

function myFunc() {
  // Function scope
  var y = 6;
  console.log(x);
}

// Let, const

let a = "fruit";

if (true) {
  // block scope
  // console.log(b);
  let b = "vegetable";
}

let c = "something";

c = "something else";

//console.log(b);
