// Async / Await
async function apiCall() {
  try {
    const response = await fetch('https://swapi.dev/api/people/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('ERROR:', error.message);
  }
}
// apiCall();

// Promise.then() notation
const myPromise = fetch('https://swapi.dev/api/people/1');

myPromise
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  });