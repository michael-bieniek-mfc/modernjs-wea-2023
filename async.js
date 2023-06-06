// Async JS

// Callbacks
function myAsyncFunc(callback) {
  setTimeout(() => {
    callback('Hello from callback');
  }, 1000);
}

function myCallback(data) {
  console.log(data);
}

myAsyncFunc(myCallback);

function myAsyncPromiseFunc() {
  const promiseHandler = (resolve, reject) => {
    // setTimeout(() => {
    //   resolve('Hello from promise');
    // }, 1000);
    reject('Promise rejected');
  };

  const myPromise = new Promise(promiseHandler);

  return myPromise;
}

const myPromiseResult = myAsyncPromiseFunc();

myPromiseResult
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

function myAsyncPromiseFunc2() {
  const promiseHandler = (resolve, reject) => {
    setTimeout(() => {
      resolve('Hello from promise 2');
    }, 1000);
  };

  const myPromise = new Promise(promiseHandler);

  return myPromise;
}

// Async / Await
async function myAsyncAwait() {
  const result = await myAsyncPromiseFunc2();
  console.log(result);
  console.log('Some more code here');
}
myAsyncAwait();

console.log('1...');
console.log('2...');