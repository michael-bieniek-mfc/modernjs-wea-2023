// 3 Arrays

const myArr = [5, "something", { name: "apple" }];

// console.log(myArr[0]);

const myArr2 = [...myArr];

// console.log(myArr2);

myArr[2].name = "Banana";

// console.log(myArr[2].name);
// console.log(myArr2[2].name);

const myArr3 = ["bar", ...myArr, "foo"];

const myArr4 = ["foo", 5, false];
// myArr4[0] = "bar";

// element 0 will stay as "foo"
const myArr5 = [...myArr4];

// destructuring
const [firstElement, secondElement] = myArr;
console.log(firstElement);
