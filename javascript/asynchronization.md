To implement asynchronization in JavaScript, you can use callbacks, promises, and the `async/await` syntax. Here's a brief overview of each method:

# Callbacks
A callback is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback('Data fetched');
  }, 1000);
}

fetchData((data) => {
  console.log(data); // Output: Data fetched
});
```

# Promises
A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false; // 模拟是否发生错误
      if (error) {
        reject('Error fetching data');
      } else {
        resolve('Data fetched');
      }
    }, 1000);
  });
}

fetchData()
  .then((data) => {
    console.log(data); // Output: Data fetched
  })
  .catch((error) => {
    console.error(error); // Output: Error fetching data
  })
  .finally(() => {
    console.log('Operation completed'); // Always executed
  });
```

# Async/Await
`async` and `await` make it easier to work with promises. `async` functions return a promise, and `await` can be used to wait for a promise to resolve.

```javascript
async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched');
    }, 1000);
  });
}

async function getData() {
  const data = await fetchData();
  console.log(data); // Output: Data fetched
}

getData();
```

# Fetch API
The Fetch API provides a way to make network requests and handle responses. It returns a promise.

```javascript
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
}

fetchData();
```

