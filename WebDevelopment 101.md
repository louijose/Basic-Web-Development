# Introduction To HTML and CSS

 - ## Table Of Contents
    * HTML
        * Typography
        * Paragraph Tag
        * Buttons
        * Lists
            * Unordered Lists
            * Ordered Lists
        * Image Tag
        * Anchor Tag
        * Form Element
            * Input Type
                * Text
                * Radio
                * Checkbox
    * CSS
        * Flexbox
        * Grid
<hr>

- ## HTML
    - ## TYPOGRAPHY
        Type is all set with the rems, so font-sizes and spacial relationships can be responsively sized based on a single ```<html>``` font-size property. Out of the box, Skeleton never changes the ```<html>``` font-size, but it's there in case you need it for your project. All measurements are still base 10 though so, an ```<h1>``` with 5.0remfont-size just means 50px.

        The typography base is Raleway served by Google, set at 15rem (15px) over a 1.6 line height (24px). Other type basics like anchors, strong, emphasis, and underline are all obviously included.

        Headings create a family of distinct sizes each with specific letter-spacing, line-height, and margins.

        Heading <h1> 50rem
        Heading <h2> 42rem
        Heading <h3> 36rem
        Heading <h4> 30rem
        Heading <h5> 24rem
        Heading <h6> 15rem
    - ## Paragraph Tag 
        
        'p' elements are the preferred element for paragraph text on websites. p is short for "paragraph".
        You can create a paragraph element like this:
        ```
        <p>I'm a p tag!</p>
        ```
    - ## BUTTONS
        The ```<button>``` tag defines a clickable button. Inside a ```<button>``` element you can put content, like text or images. This is the difference between this element and buttons created with the ```<input>``` element.
        ```
        <button type="button">Click Me!</button>
        ```

    - ## Lists
        Lists are basically of 2 types.
        - ## Ordered Lists
            
            HTML has another special element for creating ordered lists, or numbered lists.
            Ordered lists start with an opening ```<ol>```element, followed by any number of ```<li>```
            elements. Finally, ordered lists close with a```</ol>```
            ```
            For example:
            <ol>
            <li>Garfield</li>
            <li>Sylvester</li>
            </ol>
            ``` 
            
        - ## Unordered Lists
            
            HTML has a special element for creating unordered lists, or bullet point style lists.
            Unordered lists start with an opening ```<ul>``` element, followed by any number of ```<li>``` 
            elements. Finally, unordered lists close with a ```</ul>```
            For example:
            ```
            <ul>
                <li>milk</li>
                <li>cheese</li>
            </ul>
            ```

    - ## Image Tag
        Images can be added to a website by using the img element, and point to a specific image's URL using the src attribute.
        An example of this would be:
        ```
        <img src="https://www.your-image-source.com/your-image.jpg">
        ```
    - ## Anchor Tag
        Anchor elements can be used to link to content both inside and outside of a web page.
        Anchor elements need a destination  called an href attribute. They also need anchor text. Here's an example:
        ```
        <a href="https://freecodecamp.org">this links to freecodecamp.org</a>
        ```
    - ## Form Element
        The HTML ```<form>``` element defines a form that is used to collect user input:
        ```
        <form>
        .
        form elements
        .
        </form>
        ```
        An HTML form contains form elements.

        Form elements are different types of input elements, like text fields, checkboxes, radio buttons, submit buttons, and more.

        The ```<input>``` Element
        The ```<input>``` element is the most important form element.
        The ```<input>``` element can be displayed in several ways, depending on the type attribute.

        Here are some examples:

        Type	Description
        
        ```<input type="text">```	Defines a one-line text input field
        ```<input type="radio">```	Defines a radio button (for selecting one of many choices)
        ```<input type="submit">```	Defines a submit button (for submitting the form)
- ## CSS
    - ## flexbox
        The Flexible Box Layout Module, makes it easier to design flexible responsive layout structure without using float or positioning.
        Example
        
        A flex container with three flex items:

        ```
        <div class="flex-container">
        <div>1</div>
        <div>2</div>
        <div>3</div>

        .flex-container {
        display: flex;
        }
        ```
    - ## Grid
        The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.
        A grid layout consists of a parent element, with one or more child elements.

        Example
        ```
        <div class="grid-container">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        </div>

        .grid-container {
        display: grid;
        }
        ```


            


