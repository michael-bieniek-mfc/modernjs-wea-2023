const Person = {
  name: 'Jane',
  jobTitle: 'Software Engineer'
};

function greet() {
  console.log('Hello, ' + Person.name);
}

const age = 25;

// CommonJS (Node.js modules)
// module.exports = Person; // "default" export

module.exports = { // "named" exports
  Person,
  greet,
  age
};
