CSS layout techniques are essential for arranging elements on a web page. Here are the main concepts and techniques:

1. **Normal Flow**: The default layout where elements are displayed one after the other.
   ```css
   p {
       margin: 10px 0;
   }
   ```

2. **Flexbox**: A layout model for creating flexible and responsive layouts.
   ```css
   .container {
       display: flex;
       justify-content: center;
       align-items: center;
   }
   ```

3. **Grid**: A powerful layout system for creating complex, responsive grid-based designs.
   ```css
   .grid-container {
       display: grid;
       grid-template-columns: repeat(3, 1fr);
       gap: 10px;
   }
   ```

4. **Positioning**: Techniques for positioning elements using `static`, `relative`, `absolute`, `fixed`, and `sticky`.
   ```css
   .relative {
       position: relative;
       top: 10px;
       left: 10px;
   }
   ```

5. **Float**: An older method for creating layouts by floating elements to the left or right.
   ```css
   .float-left {
       float: left;
       width: 50%;
   }
   ```

6. **Clearfix**: A technique to clear floated elements.
   ```css
   .clearfix::after {
       content: "";
       clear: both;
       display: table;
   }
   ```

7. **Media Queries**: Used for creating responsive designs that adapt to different screen sizes.
   ```css
   @media (max-width: 600px) {
       .responsive {
           flex-direction: column;
       }
   }
   ```

8. **Box Alignment**: Techniques for aligning boxes within a container, often used with Flexbox and Grid.
   ```css
   .align-center {
       display: flex;
       justify-content: center;
       align-items: center;
   }
   ```

9. **Multi-column Layout**: For creating multi-column text layouts.
   ```css
   .multi-column {
       column-count: 3;
       column-gap: 20px;
   }
   ```

10. **CSS Shapes**: Allows wrapping content around custom shapes.
    ```css
    .shape {
        float: left;
        shape-outside: circle(50%);
        width: 200px;
        height: 200px;
    }
    ```
    
These techniques can be combined to create complex and responsive web layouts.