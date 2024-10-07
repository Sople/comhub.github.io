Here are the key knowledge points of functions in JavaScript:

### Function Declaration
- **Definition**: A named function that can be called anywhere in the scope.
- **Syntax**:
  ```javascript
  function functionName(parameters) {
    // function body
  }
  ```
- **Example**:
  ```javascript
  function greet(name) {
    return `Hello, ${name}!`;
  }
  console.log(greet("Alice")); // Output: Hello, Alice!
  ```

### Function Expression
- **Definition**: A function assigned to a variable. It can be anonymous or named.
- **Syntax**:
  ```javascript
  const functionName = function(parameters) {
    // function body
  };
  ```
- **Example**:
  ```javascript
  const greet = function(name) {
    return `Hello, ${name}!`;
  };
  console.log(greet("Bob")); // Output: Hello, Bob!
  ```

### Arrow Functions
- **Definition**: A shorter syntax for function expressions. They do not have their own `this` context.
- **Syntax**:
  ```javascript
  const functionName = (parameters) => {
    // function body
  };
  ```
- **Example**:
  ```javascript
  const greet = (name) => `Hello, ${name}!`;
  console.log(greet("Charlie")); // Output: Hello, Charlie!
  ```

### Immediately Invoked Function Expressions (IIFE)
- **Definition**: Functions that are executed immediately after they are defined.
- **Syntax**:
  ```javascript
  (function() {
    // function body
  })();
  ```
- **Example**:
  ```javascript
  (function(name) {
    console.log(`Hello, ${name}!`);
  })("Dave"); // Output: Hello, Dave!
  ```

### Higher-Order Functions
- **Definition**: Functions that take other functions as arguments or return functions as their result.
- **Example**:
  ```javascript
  function higherOrderFunction(callback) {
    return callback();
  }

  function greet() {
    return "Hello!";
  }

  console.log(higherOrderFunction(greet)); // Output: Hello!
  ```

### Callback Functions
- **Definition**: Functions passed as arguments to other functions and executed inside those functions.
- **Example**:
  ```javascript
  function fetchData(callback) {
    // Simulate data fetching
    setTimeout(() => {
      callback("Data fetched");
    }, 1000);
  }

  fetchData((message) => {
    console.log(message); // Output: Data fetched
  });
  ```

### Closures
- **Definition**: Functions that have access to variables from another function’s scope.
- **Example**:
  ```javascript
  function outerFunction() {
    let outerVariable = "I'm outside!";

    function innerFunction() {
      console.log(outerVariable);
    }

    return innerFunction;
  }

  const inner = outerFunction();
  inner(); // Output: I'm outside!
  ```

### Recursion
- **Definition**: A function that calls itself.
- **Example**:
  ```javascript
  function factorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }

  console.log(factorial(5)); // Output: 120
  ```

### Function Parameters and Arguments
- **Default Parameters**: Parameters with default values.
  ```javascript
  function greet(name = "Guest") {
    return `Hello, ${name}!`;
  }
  console.log(greet()); // Output: Hello, Guest!
  ```
- **Rest Parameters**: Allows a function to accept an indefinite number of arguments as an array.
  ```javascript
  function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  console.log(sum(1, 2, 3)); // Output: 6
  ```

### Summary
- **Function Declaration**: Named functions that can be called anywhere in the scope.
- **Function Expression**: Functions assigned to variables.
- **Arrow Functions**: Shorter syntax for function expressions.
- **IIFE**: Functions executed immediately after they are defined.
- **Higher-Order Functions**: Functions that take other functions as arguments or return functions.
- **Callback Functions**: Functions passed as arguments to other functions.
- **Closures**: Functions that have access to variables from another function’s scope.
- **Recursion**: Functions that call themselves.
- **Function Parameters and Arguments**: Default parameters and rest parameters.

These concepts are fundamental for understanding and effectively using functions in JavaScript.