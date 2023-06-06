const Person = {
  name: "John"
};

function greet() {
  console.log('Hello, ' + Person.name);
}

export default Person; // default export (can only ever have one per module)

export { greet }; // "named" export