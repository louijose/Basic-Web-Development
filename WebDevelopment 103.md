## SASS
<hr>
Sass, or "Syntactically Awesome StyleSheets", is a language extension of CSS. It adds features that aren't available using basic CSS syntax. Sass makes it easier for developers to simplify and maintain the style sheets for their projects.
Sass can extend the CSS language because it is a preprocessor. It takes code written using Sass syntax, and converts it into basic CSS. This allows you to create variables, nest CSS rules into others, and import other Sass files, among other things. The result is more compact, easier to read code.

## Store Data with Sass Variables
One feature of Sass that's different than CSS is it uses variables. They are declared and set to store data,similar to JavaScript. In Sass, variables start with a `$` followed by the variable name.

## Nest CSS with Sass
Sass allows nesting of CSS rules, which is a useful way of organizing a style sheet.
Normally, each element is targeted on a different line to style it.

## Create Reusable CSS with Mixins
In Sass, a mixin is a group of CSS declarations that can be reused throughout the style sheet.
Newer CSS features take time before they are fully adopted and ready to use in all browsers. As features are added to browsers, CSS rules using them may need vendor prefixes.

## Use @if and @else to Add Logic To Your Styles
The @if directive in Sass is useful to test for a specific case - it works just like the if statement in JavaScript.

## Use @for to Create a Sass Loop
The @for directive adds styles in a loop, very similar to a for loop in JavaScript.
@for is used in two ways: "start through end" or "start to end". The main difference is that "start to end" excludes the end number, and "start through end" includes the end number.

##  Apply a Style Until a Condition is Met with @while
The @while directive is an option with similar functionality to the JavaScript while loop. It creates CSS rules until a condition is met.
The @for challenge gave an example to create a simple grid system. This can also work with @while.

## Split Your Styles into Smaller Chunks with Partials
Partials in Sass are separate files that hold segments of CSS code. These are imported and used in other Sass files. This is a great way to group similar code into a module to keep it organized.

## Extend One Set of CSS Styles to Another Element
Sass has a feature called extend that makes it easy to borrow the CSS rules from one element and build upon them in another.
<hr>

## Jquery
<hr>

## HTML Selectors Using jQuery
All jQuery functions start with a $, usually referred to as a dollar sign operator, or as bling.jQuery often selects an HTML element with a selector,then does something to that element.

## document.ready(function())
The ready event occurs when the DOM (document object model) has been loaded.Because this event occurs after the document is ready, it is a good place to have all other jQuery events and functions. Like in the example above.The ready() method specifies what happens when a ready event occurs.

## Types of HTML Selectors used 
- ## Type
    HTML elements can be selected by the jquery functions using the type of elements.
- ## Class
    HTML elements can be selected by the jquery functions using the class specified by each element.
- ## ID
    HTML elements can be selected by the jquery functions using their id attributes.

## css()
jQuery has a function called .css() that allows you to change the CSS of an element.

## prop()
jQuery has a function called .prop() that allows you to adjust the properties of elements.

## html()
jQuery has a function called .html() that lets you add HTML tags and text within an element. Any content previously within the element will be completely replaced with the content you provide using this function.

## remove()
jQuery has a function called .remove() that will remove an HTML element entirely

## appendTo()
jQuery has a function called appendTo() that allows you to select HTML elements and append them to another element.

## clone()
jQuery has a function called clone() that makes a copy of an element.

## parent()
jQuery has a function called parent() that allows you to access the parent of whichever element you've selected.

## children()
jQuery has a function called children() that allows you to access the children of whichever element you've selected.

## target:nth-child(n)
jQuery uses CSS Selectors to target elements. The target:nth-child(n) CSS selector allows you to select all the nth elements with the target class or element type.

## Modify the Entire Page
jQuery can target the body element as well.
<hr>

## Bootstrap
<hr>

## img-responsive
To make a image responsive using bootstrap img-responsive class is added to the image. Do this, and the image should perfectly fit the width of your page.

## text-center
By adding text-center to an element,the text will it contains will be centered.

## Button
The button elements with the btn and btn-default classes are only as wide as the text that they contain.

## col-md-*
Bootstrap's col-md-* class. Here, md means medium, and * is a number specifying how many columns wide the element should be.

## col-xs-*
Here xs means extra small (like an extra-small mobile phone screen), and * is the number of columns specifying how many columns wide the element should be.

## span
By using the inline span element, you can put several elements on the same line, and even style different parts of the same line differently.

## Font Awesome
Font Awesome is a convenient library of icons. These icons are vector graphics, stored in the .svg file format. These icons are treated just like fonts. You can specify their size using pixels, and they will assume the font size of their parent HTML elements

## 


