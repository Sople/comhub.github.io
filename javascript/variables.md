In JavaScript, variables are fundamental for storing and manipulating data. Here are the key knowledge points:

### Variable Declaration
- **`var`**: Function-scoped or globally-scoped, can be re-declared and updated.
  ```javascript
  var x = 10;
  var x = 20; // Re-declaration is allowed
  x = 30; // Update is allowed
  ```
- **`let`**: Block-scoped, cannot be re-declared within the same scope, but can be updated.
  ```javascript
  let y = 10;
  // let y = 20; // Re-declaration is not allowed within the same scope
  y = 30; // Update is allowed
  ```
- **`const`**: Block-scoped, cannot be re-declared or updated, must be initialized at the time of declaration.
  ```javascript
  const z = 10;
  // const z = 20; // Re-declaration is not allowed
  // z = 30; // Update is not allowed
  ```

### Variable Scope
- **Global Scope**: Variables declared outside any function or block are in the global scope.
  ```javascript
  var globalVar = "I'm global";
  ```
- **Function Scope**: Variables declared within a function using `var` are scoped to that function.
  ```javascript
  function myFunction() {
    var functionVar = "I'm local to the function";
  }
  ```
- **Block Scope**: Variables declared within a block (e.g., inside `{}`) using `let` or `const` are scoped to that block.
  ```javascript
  if (true) {
    let blockVar = "I'm local to the block";
  }
  ```

### Hoisting
- **Definition**: JavaScript's default behavior of moving declarations to the top of the current scope.
- **Example**:
  ```javascript
  console.log(hoistedVar); // undefined
  var hoistedVar = 10;

  // console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
  let hoistedLet = 20;
  ```

### Variable Initialization
- **Definition**: Assigning a value to a variable at the time of declaration.
- **Example**:
  ```javascript
  var a = 10; // Initialized with 10
  let b = 20; // Initialized with 20
  const c = 30; // Initialized with 30
  ```

### Variable Types
- **Primitive Types**: `undefined`, `null`, `boolean`, `number`, `string`, `symbol`, `bigint`.
  ```javascript
  let str = "Hello"; // string
  let num = 42; // number
  let bool = true; // boolean
  let undef; // undefined
  let nul = null; // null
  let sym = Symbol("sym"); // symbol
  let bigInt = 123n; // bigint
  ```
- **Reference Types**: Objects, arrays, functions.
  ```javascript
  let obj = { key: "value" }; // object
  let arr = [1, 2, 3]; // array
  let func = function() { return "Hello"; }; // function
  ```

### Summary
- **Variable Declaration**: `var`, `let`, `const`.
- **Variable Scope**: Global, function, block.
- **Hoisting**: Moving declarations to the top of the scope.
- **Variable Initialization**: Assigning values at the time of declaration.
- **Variable Types**: Primitive (e.g., `string`, `number`) and reference types (e.g., `object`, `array`).

Understanding these concepts is crucial for effectively using variables in JavaScript.