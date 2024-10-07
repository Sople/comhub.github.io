## Pseudo-Classes

CSS pseudo-classes are keywords added to selectors that specify a special state of the selected elements. They are used to style elements based on their state, position in the document, user interaction, and more. Here are the key areas of knowledge involved in CSS pseudo-classes:

### Key Concepts of CSS Pseudo-Classes

1. **Structural Pseudo-Classes**:
   - **`:first-child`**: Selects the first child of its parent.
     ```css
     p:first-child {
       color: blue;
     }
     ```
   - **`:last-child`**: Selects the last child of its parent.
     ```css
     p:last-child {
       color: green;
     }
     ```
   - **`:nth-child(n)`**: Selects the nth child of its parent.
     ```css
     p:nth-child(2) {
       color: red;
     }
     ```
   - **`:nth-last-child(n)`**: Selects the nth child from the end of its parent.
     ```css
     p:nth-last-child(2) {
       color: purple;
     }
     ```
   - **`:nth-of-type(n)`**: Selects the nth child of its type.
     ```css
     p:nth-of-type(2) {
       color: orange;
     }
     ```
   - **`:nth-last-of-type(n)`**: Selects the nth child of its type from the end.
     ```css
     p:nth-last-of-type(2) {
       color: pink;
     }
     ```
   - **`:only-child`**: Selects an element that is the only child of its parent.
     ```css
     p:only-child {
       color: brown;
     }
     ```
   - **`:only-of-type`**: Selects an element that is the only one of its type within its parent.
     ```css
     p:only-of-type {
       color: teal;
     }
     ```

2. **User Action Pseudo-Classes**:
   - **`:hover`**: Selects an element when the user hovers over it.
     ```css
     a:hover {
       color: red;
     }
     ```
   - **`:active`**: Selects an element when it is being activated (e.g., clicked).
     ```css
     a:active {
       color: green;
     }
     ```
   - **`:focus`**: Selects an element when it has focus.
     ```css
     input:focus {
       border-color: blue;
     }
     ```

3. **Form Pseudo-Classes**:
   - **`:enabled`**: Selects enabled form elements.
     ```css
     input:enabled {
       background-color: white;
     }
     ```
   - **`:disabled`**: Selects disabled form elements.
     ```css
     input:disabled {
       background-color: gray;
     }
     ```
   - **`:checked`**: Selects checked radio buttons and checkboxes.
     ```css
     input:checked {
       background-color: yellow;
     }
     ```
   - **`:indeterminate`**: Selects elements that are in an indeterminate state.
     ```css
     input:indeterminate {
       background-color: lightgray;
     }
     ```
   - **`:valid`**: Selects form elements with valid values.
     ```css
     input:valid {
       border-color: green;
     }
     ```
   - **`:invalid`**: Selects form elements with invalid values.
     ```css
     input:invalid {
       border-color: red;
     }
     ```
   - **`:in-range`**: Selects input elements with values within a specified range.
     ```css
     input:in-range {
       border-color: green;
     }
     ```
   - **`:out-of-range`**: Selects input elements with values outside a specified range.
     ```css
     input:out-of-range {
       border-color: red;
     }
     ```
   - **`:required`**: Selects required form elements.
     ```css
     input:required {
       border-color: blue;
     }
     ```
   - **`:optional`**: Selects optional form elements.
     ```css
     input:optional {
       border-color: gray;
     }
     ```

4. **Pseudo-Classes for Links**:
   - **`:link`**: Selects unvisited links.
     ```css
     a:link {
       color: blue;
     }
     ```
   - **`:visited`**: Selects visited links.
     ```css
     a:visited {
       color: purple;
     }
     ```

5. **Negation Pseudo-Class**:
   - **`:not(selector)`**: Selects elements that do not match the specified selector.
     ```css
     p:not(.special) {
       color: black;
     }
     ```

6. **UI Element States**:
   - **`:read-only`**: Selects elements that are read-only.
     ```css
     input:read-only {
       background-color: lightgray;
     }
     ```
   - **`:read-write`**: Selects elements that are editable.
     ```css
     input:read-write {
       background-color: white;
     }
     ```

7. **Pseudo-Classes for Empty and Blank Elements**:
   - **`:empty`**: Selects elements that have no children.
     ```css
     p:empty {
       display: none;
     }
     ```
   - **`:blank`**: Selects elements that are empty or contain only whitespace (not widely supported).
     ```css
     input:blank {
       background-color: lightyellow;
     }
     ```

### Practical Examples

1. **Styling the First and Last Child**:
   ```css
   ul li:first-child {
     font-weight: bold;
   }

   ul li:last-child {
     font-style: italic;
   }
   ```

2. **Hover and Focus States**:
   ```css
   button:hover {
     background-color: lightblue;
   }

   button:focus {
     outline: 2px solid blue;
   }
   ```

3. **Form Validation States**:
   ```css
   input:valid {
     border-color: green;
   }

   input:invalid {
     border-color: red;
   }
   ```

### Summary

CSS pseudo-classes are powerful tools that allow you to apply styles based on the state, position, and user interaction of elements. Understanding and utilizing these pseudo-classes can greatly enhance the interactivity and user experience of your web pages.


## Pseudo-Elements

CSS pseudo-elements are used to style specific parts of an element. They allow you to apply styles to parts of an element that are not directly accessible via the DOM. Here are the key areas of knowledge involved in CSS pseudo-elements:

### Key Concepts of CSS Pseudo-Elements

1. **Basic Pseudo-Elements**:
   - **`::before`**: Inserts content before the content of an element.
     ```css
     p::before {
       content: "Note: ";
       font-weight: bold;
     }
     ```
   - **`::after`**: Inserts content after the content of an element.
     ```css
     p::after {
       content: " [Read more]";
       font-style: italic;
     }
     ```

2. **Styling Parts of Text**:
   - **`::first-line`**: Applies styles to the first line of a block-level element.
     ```css
     p::first-line {
       font-weight: bold;
       color: blue;
     }
     ```
   - **`::first-letter`**: Applies styles to the first letter of a block-level element.
     ```css
     p::first-letter {
       font-size: 2em;
       color: red;
     }
     ```

3. **Pseudo-Elements for Form Elements**:
   - **`::placeholder`**: Styles the placeholder text of an input element.
     ```css
     input::placeholder {
       color: gray;
       font-style: italic;
     }
     ```

4. **Pseudo-Elements for Lists**:
   - **`::marker`**: Styles the marker of a list item.
     ```css
     li::marker {
       color: red;
       font-size: 1.5em;
     }
     ```

5. **Custom Content with Pseudo-Elements**:
   - **`content` Property**: Used with `::before` and `::after` to insert custom content.
     ```css
     .quote::before {
       content: "“";
       font-size: 2em;
       vertical-align: top;
     }

     .quote::after {
       content: "”";
       font-size: 2em;
       vertical-align: bottom;
     }
     ```

6. **Combining Pseudo-Elements with Other Selectors**:
   - **Combining with Classes and IDs**: Applying pseudo-elements to specific classes or IDs.
     ```css
     .highlight::before {
       content: "Important: ";
       color: red;
     }
     ```

7. **Advanced Styling**:
   - **Animations and Transitions**: Applying animations and transitions to pseudo-elements.
     ```css
     .button::before {
       content: "";
       display: block;
       width: 0;
       height: 2px;
       background: blue;
       transition: width 0.3s;
     }

     .button:hover::before {
       width: 100%;
     }
     ```

8. **Browser Compatibility**:
   - **Vendor Prefixes**: Using vendor prefixes for better browser support.
     ```css
     input::-webkit-input-placeholder {
       color: gray;
     }

     input::-moz-placeholder {
       color: gray;
     }

     input:-ms-input-placeholder {
       color: gray;
     }

     input::-ms-input-placeholder {
       color: gray;
     }

     input::placeholder {
       color: gray;
     }
     ```

### Practical Examples

1. **Styling the First Letter and Line**:
   ```css
   p::first-letter {
     font-size: 2em;
     color: red;
   }

   p::first-line {
     font-weight: bold;
     color: blue;
   }
   ```

2. **Adding Quotes with `::before` and `::after`**:
   ```css
   blockquote::before {
     content: "“";
     font-size: 2em;
     vertical-align: top;
   }

   blockquote::after {
     content: "”";
     font-size: 2em;
     vertical-align: bottom;
   }
   ```

3. **Styling Placeholder Text**:
   ```css
   input::placeholder {
     color: gray;
     font-style: italic;
   }
   ```

### Summary

CSS pseudo-elements are powerful tools that allow you to style specific parts of an element, such as the first letter, first line, or content before and after an element. Understanding and utilizing these pseudo-elements can greatly enhance the visual presentation and interactivity of your web pages.