CSS selectors are patterns used to select and style HTML elements. Here are the main types of CSS selectors:

1. **Universal Selector (`*`)**: Selects all elements.
   ```css
   * {
       color: blue;
   }
   ```

2. **Type Selector**: Selects all elements of a given type.
   ```css
   p {
       font-size: 16px;
   }
   ```

3. **Class Selector (`.`)**: Selects all elements with a specific class.
   ```css
   .my-class {
       background-color: yellow;
   }
   ```

4. **ID Selector (`#`)**: Selects a single element with a specific ID.
   ```css
   #my-id {
       margin: 10px;
   }
   ```

5. **Attribute Selector**: Selects elements based on an attribute or attribute value.
   ```css
   [type="text"] {
       border: 1px solid black;
   }
   ```

6. **Descendant Selector**: Selects elements that are descendants of another element.
   ```css
   div p {
       color: red;
   }
   ```

7. **Child Selector (`>`)**: Selects direct children of an element.
   ```css
   ul > li {
       list-style-type: none;
   }
   ```

8. **Adjacent Sibling Selector (`+`)**: Selects an element that is immediately preceded by a specified element.
   ```css
   h1 + p {
       margin-top: 0;
   }
   ```

9. **General Sibling Selector (`~`)**: Selects all elements that are siblings of a specified element.
   ```css
   h1 ~ p {
       color: green;
   }
   ```

10. **Pseudo-class Selector**: Selects elements based on their state.
    ```css
    a:hover {
        text-decoration: underline;
    }
    ```

11. **Pseudo-element Selector**: Selects and styles parts of an element.
    ```css
    p::first-line {
        font-weight: bold;
    }
    ```

These selectors can be combined and nested to create more specific and powerful rules for styling web pages.