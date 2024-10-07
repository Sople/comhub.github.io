CSS backgrounds involve styling the background of elements. Here are the main concepts and properties:

1. **Background Color**: Sets the background color of an element.
   ```css
   body {
       background-color: #f0f0f0;
   }
   ```

2. **Background Image**: Sets an image as the background.
   ```css
   div {
       background-image: url('background.jpg');
   }
   ```

3. **Background Repeat**: Controls the repetition of the background image.
   ```css
   div {
       background-repeat: no-repeat;
   }
   ```

4. **Background Position**: Sets the initial position of the background image.
   ```css
   div {
       background-position: center;
   }
   ```

5. **Background Size**: Specifies the size of the background image.
   ```css
   div {
       background-size: cover;
   }
   ```

6. **Background Attachment**: Controls whether the background image scrolls with the page or is fixed.
   ```css
   div {
       background-attachment: fixed;
   }
   ```

7. **Background Clip**: Specifies the painting area of the background.
   ```css
   div {
       background-clip: content-box;
   }
   ```

8. **Background Origin**: Specifies the positioning area of the background image.
   ```css
   div {
       background-origin: border-box;
   }
   ```

9. **Background Blend Mode**: Defines how the background image should blend with the background color.
   ```css
   div {
       background-blend-mode: multiply;
   }
   ```

10. **Multiple Backgrounds**: Allows setting multiple background images.
    ```css
    div {
        background-image: url('image1.jpg'), url('image2.png');
        background-position: left top, right bottom;
        background-repeat: no-repeat, repeat;
    }
    ```

### Example
Combining multiple background properties:
```css
div {
    background-color: #f0f0f0;
    background-image: url('background.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
}
```

These properties and techniques allow for detailed control over the background styling of elements on web pages.