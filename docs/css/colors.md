CSS colors involve specifying the color of elements on a web page. Here are the main concepts and properties:

1. **Color Names**: Using predefined color names.
   ```css
   p {
       color: red;
   }
   ```

2. **Hexadecimal Colors**: Using hex codes to define colors.
   ```css
   h1 {
       color: #ff5733;
   }
   ```

3. **RGB Colors**: Using the RGB color model.
   ```css
   div {
       background-color: rgb(255, 87, 51);
   }
   ```

4. **RGBA Colors**: Adding an alpha channel to RGB for transparency.
   ```css
   span {
       background-color: rgba(255, 87, 51, 0.5);
   }
   ```

5. **HSL Colors**: Using the HSL (Hue, Saturation, Lightness) model.
   ```css
   section {
       color: hsl(9, 100%, 60%);
   }
   ```

6. **HSLA Colors**: Adding an alpha channel to HSL for transparency.
   ```css
   article {
       background-color: hsla(9, 100%, 60%, 0.5);
   }
   ```

7. **CurrentColor Keyword**: Using the `currentColor` keyword to inherit the color value.
   ```css
   a {
       border-color: currentColor;
   }
   ```

8. **Opacity**: Setting the opacity of an element.
   ```css
   img {
       opacity: 0.8;
   }
   ```

9. **Gradients**: Creating gradient backgrounds.
   ```css
   .gradient {
       background: linear-gradient(to right, red, yellow);
   }
   ```

10. **Custom Properties (CSS Variables)**: Defining and using custom color properties.
    ```css
    :root {
        --main-color: #ff5733;
    }
    p {
        color: var(--main-color);
    }
    ```

These properties and techniques allow for detailed control over the color and transparency of elements on web pages.