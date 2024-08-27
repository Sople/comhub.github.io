# Sequential Statements

# Conditional Statements
In JavaScript, conditional statements are used to perform different actions based on different conditions. Here are the key knowledge points:

### `if` Statement
- **Definition**: Executes a block of code if a specified condition is true.
- **Syntax**:
  ```javascript
  if (condition) {
    // code to be executed if condition is true
  }
  ```
- **Example**:
  ```javascript
  let x = 10;
  if (x > 5) {
    console.log("x is greater than 5");
  }
  ```

### `if...else` Statement
- **Definition**: Executes one block of code if a condition is true, and another block if it is false.
- **Syntax**:
  ```javascript
  if (condition) {
    // code to be executed if condition is true
  } else {
    // code to be executed if condition is false
  }
  ```
- **Example**:
  ```javascript
  let x = 10;
  if (x > 15) {
    console.log("x is greater than 15");
  } else {
    console.log("x is not greater than 15");
  }
  ```

### `if...else if...else` Statement
- **Definition**: Specifies a new condition to test if the first condition is false.
- **Syntax**:
  ```javascript
  if (condition1) {
    // code to be executed if condition1 is true
  } else if (condition2) {
    // code to be executed if condition2 is true
  } else {
    // code to be executed if both condition1 and condition2 are false
  }
  ```
- **Example**:
  ```javascript
  let x = 10;
  if (x > 15) {
    console.log("x is greater than 15");
  } else if (x > 5) {
    console.log("x is greater than 5 but not greater than 15");
  } else {
    console.log("x is 5 or less");
  }
  ```

### `switch` Statement
- **Definition**: Evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.
- **Syntax**:
  ```javascript
  switch (expression) {
    case value1:
      // code to be executed if expression === value1
      break;
    case value2:
      // code to be executed if expression === value2
      break;
    default:
      // code to be executed if expression doesn't match any case
  }
  ```
- **Example**:
  ```javascript
  let day = 3;
  switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    default:
      console.log("Another day");
  }
  ```

### Ternary Operator
- **Definition**: A shorthand for the `if...else` statement.
- **Syntax**:
  ```javascript
  condition ? expr1 : expr2
  ```
- **Example**:
  ```javascript
  let x = 10;
  let result = x > 5 ? "x is greater than 5" : "x is 5 or less";
  console.log(result);
  ```

### Logical Operators
- **Definition**: Used to combine multiple conditions.
- **Operators**: `&&` (AND), `||` (OR), `!` (NOT)
- **Example**:
  ```javascript
  let x = 10;
  let y = 20;
  if (x > 5 && y > 15) {
    console.log("Both conditions are true");
  }
  ```

### Summary
- **`if` Statement**: Executes code if a condition is true.
- **`if...else` Statement**: Executes one block of code if a condition is true, another if it is false.
- **`if...else if...else` Statement**: Tests multiple conditions.
- **`switch` Statement**: Matches an expression's value to a case clause.
- **Ternary Operator**: Shorthand for `if...else`.
- **Logical Operators**: Combine multiple conditions.

These conditional statements allow you to control the flow of your program based on different conditions.

# Looping Statements
In JavaScript, looping statements are used to repeatedly execute a block of code as long as a specified condition is true. Here are the key knowledge points:

### [`for`](command:_github.copilot.openSymbolFromReferences?%5B%22for%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Flyc%2FDesktop%2Fsople.net%2Fjavascript%2Fcontrol_flow_statements.md%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Flyc%2FDesktop%2Fsople.net%2Fjavascript%2Fcontrol_flow_statements.md%22%2C%22path%22%3A%22%2FUsers%2Flyc%2FDesktop%2Fsople.net%2Fjavascript%2Fcontrol_flow_statements.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A128%2C%22character%22%3A34%7D%7D%5D%5D "Go to definition") Loop
- **Definition**: Repeats a block of code a specified number of times.
- **Syntax**:
  ```javascript
  for (initialization; condition; increment) {
    // code to be executed
  }
  ```
- **Example**:
  ```javascript
  for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
  }
  ```

### `while` Loop
- **Definition**: Repeats a block of code as long as a specified condition is true.
- **Syntax**:
  ```javascript
  while (condition) {
    // code to be executed
  }
  ```
- **Example**:
  ```javascript
  let i = 0;
  while (i < 5) {
    console.log(i); // Output: 0, 1, 2, 3, 4
    i++;
  }
  ```

### `do...while` Loop
- **Definition**: Similar to the `while` loop, but it executes the block of code once before checking the condition.
- **Syntax**:
  ```javascript
  do {
    // code to be executed
  } while (condition);
  ```
- **Example**:
  ```javascript
  let i = 0;
  do {
    console.log(i); // Output: 0, 1, 2, 3, 4
    i++;
  } while (i < 5);
  ```

### [`for...in`](command:_github.copilot.openSymbolFromReferences?%5B%22for...in%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Flyc%2FDesktop%2Fsople.net%2Fjavascript%2Fcontrol_flow_statements.md%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Flyc%2FDesktop%2Fsople.net%2Fjavascript%2Fcontrol_flow_statements.md%22%2C%22path%22%3A%22%2FUsers%2Flyc%2FDesktop%2Fsople.net%2Fjavascript%2Fcontrol_flow_statements.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A128%2C%22character%22%3A34%7D%7D%5D%5D "Go to definition") Loop
- **Definition**: Iterates over the enumerable properties of an object.
- **Syntax**:
  ```javascript
  for (variable in object) {
    // code to be executed
  }
  ```
- **Example**:
  ```javascript
  const obj = {a: 1, b: 2, c: 3};
  for (let key in obj) {
    console.log(key, obj[key]); // Output: a 1, b 2, c 3
  }
  ```

### [`for...of`](command:_github.copilot.openSymbolFromReferences?%5B%22for...of%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Flyc%2FDesktop%2Fsople.net%2Fjavascript%2Fcontrol_flow_statements.md%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Flyc%2FDesktop%2Fsople.net%2Fjavascript%2Fcontrol_flow_statements.md%22%2C%22path%22%3A%22%2FUsers%2Flyc%2FDesktop%2Fsople.net%2Fjavascript%2Fcontrol_flow_statements.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A128%2C%22character%22%3A34%7D%7D%5D%5D "Go to definition") Loop
- **Definition**: Iterates over the values of an iterable object (like an array or a string).
- **Syntax**:
  ```javascript
  for (variable of iterable) {
    // code to be executed
  }
  ```
- **Example**:
  ```javascript
  const arr = [1, 2, 3];
  for (let value of arr) {
    console.log(value); // Output: 1, 2, 3
  }
  ```

### `break` Statement
- **Definition**: Terminates the current loop or switch statement.
- **Syntax**:
  ```javascript
  break;
  ```
- **Example**:
  ```javascript
  for (let i = 0; i < 5; i++) {
    if (i === 3) {
      break;
    }
    console.log(i); // Output: 0, 1, 2
  }
  ```

### `continue` Statement
- **Definition**: Skips the current iteration of the loop and continues with the next iteration.
- **Syntax**:
  ```javascript
  continue;
  ```
- **Example**:
  ```javascript
  for (let i = 0; i < 5; i++) {
    if (i === 3) {
      continue;
    }
    console.log(i); // Output: 0, 1, 2, 4
  }
  ```

### Summary
- **[`for`](command:_github.copilot.openSymbolFromReferences?%5B%22for%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Flyc%2FDesktop%2Fsople.net%2Fjavascript%2Fcontrol_flow_statements.md%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Flyc%2FDesktop%2Fsople.net%2Fjavascript%2Fcontrol_flow_statements.md%22%2C%22path%22%3A%22%2FUsers%2Flyc%2FDesktop%2Fsople.net%2Fjavascript%2Fcontrol_flow_statements.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A128%2C%22character%22%3A34%7D%7D%5D%5D "Go to definition") Loop**: Repeats a block of code a specified number of times.
- **`while` Loop**: Repeats a block of code as long as a specified condition is true.
- **`do...while` Loop**: Executes a block of code once before checking the condition.
- **[`for...in`](command:_github.copilot.openSymbolFromReferences?%5B%22for...in%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Flyc%2FDesktop%2Fsople.net%2Fjavascript%2Fcontrol_flow_statements.md%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Flyc%2FDesktop%2Fsople.net%2Fjavascript%2Fcontrol_flow_statements.md%22%2C%22path%22%3A%22%2FUsers%2Flyc%2FDesktop%2Fsople.net%2Fjavascript%2Fcontrol_flow_statements.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A128%2C%22character%22%3A34%7D%7D%5D%5D "Go to definition") Loop**: Iterates over the enumerable properties of an object.
- **[`for...of`](command:_github.copilot.openSymbolFromReferences?%5B%22for...of%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Flyc%2FDesktop%2Fsople.net%2Fjavascript%2Fcontrol_flow_statements.md%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Flyc%2FDesktop%2Fsople.net%2Fjavascript%2Fcontrol_flow_statements.md%22%2C%22path%22%3A%22%2FUsers%2Flyc%2FDesktop%2Fsople.net%2Fjavascript%2Fcontrol_flow_statements.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A128%2C%22character%22%3A34%7D%7D%5D%5D "Go to definition") Loop**: Iterates over the values of an iterable object.
- **`break` Statement**: Terminates the current loop or switch statement.
- **`continue` Statement**: Skips the current iteration of the loop and continues with the next iteration.

These looping statements allow you to control the flow of your program by repeating code blocks based on specified conditions.