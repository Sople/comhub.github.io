CSS specificity and inheritance are fundamental concepts that determine how styles are applied to elements in a web page. Here are the key areas of knowledge involved in understanding CSS specificity and inheritance:

### CSS Specificity

1. **Specificity Calculation**:
   - **Definition**: Specificity is a measure of how specific a CSS selector is. It determines which styles are applied when multiple selectors match the same element.
   - **Calculation**: Specificity is calculated based on the types of selectors used:
     - Inline styles: `1000`
     - ID selectors: `0100`
     - Class, attribute, and pseudo-class selectors: `0010`
     - Element and pseudo-element selectors: `0001`
   - **Example**:
     ```css
     /* Specificity: 0001 */
     p {
       color: blue;
     }

     /* Specificity: 0010 */
     .class {
       color: green;
     }

     /* Specificity: 0100 */
     #id {
       color: red;
     }

     /* Specificity: 1000 */
     <p style="color: yellow;">Text</p>
     ```

2. **Combining Selectors**:
   - **Definition**: When multiple selectors are combined, their specificity values are added together.
   - **Example**:
     ```css
     /* Specificity: 0011 (0010 + 0001) */
     .class p {
       color: purple;
     }

     /* Specificity: 0110 (0100 + 0010) */
     #id .class {
       color: orange;
     }
     ```

3. **Importance of Specificity**:
   - **Definition**: Specificity determines which styles are applied when there are conflicting rules.
   - **Example**:
     ```css
     p {
       color: blue; /* Specificity: 0001 */
     }

     .class p {
       color: green; /* Specificity: 0011 */
     }

     #id p {
       color: red; /* Specificity: 0101 */
     }
     ```

4. **Using `!important`**:
   - **Definition**: The `!important` declaration overrides any other declarations, regardless of specificity.
   - **Example**:
     ```css
     p {
       color: blue !important;
     }

     .class p {
       color: green;
     }

     #id p {
       color: red;
     }
     ```

### CSS Inheritance

1. **Inherited Properties**:
   - **Definition**: Some CSS properties are inherited from parent elements to child elements.
   - **Common Inherited Properties**: `color`, `font-family`, `font-size`, `line-height`, `text-align`, `visibility`.
   - **Example**:
     ```css
     body {
       color: blue;
     }

     p {
       /* Inherits color from body */
     }
     ```

2. **Non-Inherited Properties**:
   - **Definition**: Some CSS properties are not inherited by default.
   - **Common Non-Inherited Properties**: `margin`, `padding`, `border`, `background`, `width`, `height`.
   - **Example**:
     ```css
     body {
       margin: 20px;
     }

     p {
       /* Does not inherit margin from body */
     }
     ```

3. **Using `inherit` Keyword**:
   - **Definition**: The `inherit` keyword forces a property to inherit its value from its parent element.
   - **Example**:
     ```css
     .child {
       color: inherit; /* Inherits color from parent */
     }
     ```

4. **Using `initial` Keyword**:
   - **Definition**: The `initial` keyword sets a property to its initial value.
   - **Example**:
     ```css
     .child {
       color: initial; /* Sets color to its initial value */
     }
     ```

5. **Using `unset` Keyword**:
   - **Definition**: The `unset` keyword acts as `inherit` if the property is inheritable, otherwise it acts as `initial`.
   - **Example**:
     ```css
     .child {
       color: unset; /* Acts as inherit for color */
     }
     ```

### Practical Examples

1. **Specificity Example**:
   ```css
   p {
     color: blue; /* Specificity: 0001 */
   }

   .class p {
     color: green; /* Specificity: 0011 */
   }

   #id p {
     color: red; /* Specificity: 0101 */
   }

   <p id="id" class="class">Text</p> <!-- Text will be red -->
   ```

2. **Inheritance Example**:
   ```css
   body {
     color: blue;
   }

   p {
     /* Inherits color from body */
   }

   <body>
     <p>Text</p> <!-- Text will be blue -->
   </body>
   ```

### Summary

Understanding CSS specificity and inheritance is crucial for effectively applying styles to web pages. Specificity determines which styles are applied when there are conflicting rules, while inheritance allows certain properties to be passed down from parent elements to child elements. Mastering these concepts helps in writing more maintainable and predictable CSS.1