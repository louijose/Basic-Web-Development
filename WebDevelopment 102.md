## Javascript Guide
<hr>
## Introduction
JavaScript is a cross-platform, object-oriented scripting language. It is a small and lightweight language. Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.
JavaScript contains a standard library of objects, such as Array, Date, and Math, and a core set of language elements such as operators, control structures, and statements. Core JavaScript can be extended for a variety of purposes by supplementing it with additional objects; for example:
* Client-side JavaScript extends the core language by supplying objects to control a browser and its Document Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation.
* Server-side JavaScript extends the core language by supplying objects relevant to running JavaScript on a server. For example, server-side extensions allow an application to communicate with a database, provide continuity of information from one invocation to another of the application, or perform file manipulations on a server.

## What you should already know
This guide assumes you have the following basic background:
* A general understanding of the Internet and the World Wide Web (WWW).
* Good working knowledge of HyperText Markup Language (HTML).
* Some programming experience. If you are new to programming, try one of the tutorials linked on the main page about JavaScript.

## JavaScript and Java
JavaScript and Java are similar in some ways but fundamentally different in some others. The JavaScript language resembles Java but does not have Java's static typing and strong type checking. JavaScript follows most Java expression syntax, naming conventions and basic control-flow constructs which was the reason why it was renamed from LiveScript to JavaScript.

In contrast to Java's compile-time system of classes built by declarations, JavaScript supports a runtime system based on a small number of data types representing numeric, Boolean, and string values. JavaScript has a prototype-based object model instead of the more common class-based object model. The prototype-based model provides dynamic inheritance; that is, what is inherited can vary for individual objects. JavaScript also supports functions without any special declarative requirements. Functions can be properties of objects, executing as loosely typed methods.

JavaScript is a very free-form language compared to Java. You do not have to declare all variables, classes,and methods. You do not have to be concerned with whether methods are public, private, or protected, and you do not have to implement interfaces. Variables, parameters, and function return types are not explicitly typed.

## Hello world
To get started with writing JavaScript, open the Scratchpad and write your first "Hello world" JavaScript code:
```js run no-beautify
function greetMe(yourName) { alert("Hello " + yourName); }
greetMe("World");
```
Select the code in the pad and hit Ctrl+R to watch it unfold in your browser!
##  Code structure

The first thing we'll study is the building blocks of code.

## Statements

Statements are syntax constructs and commands that perform actions.

We've already seen a statement, `alert('Hello, world!')`, which shows the message "Hello, world!".

We can have as many statements in our code as we want. Statements can be separated with a semicolon.

For example, here we split "Hello World" into two alerts:

```js run no-beautify
alert('Hello'); alert('World');
```

Usually, statements are written on separate lines to make the code more readable:

```js run no-beautify
alert('Hello');
alert('World');
```

## Semicolons [#semicolon]

A semicolon may be omitted in most cases when a line break exists.

This would also work:

```js run no-beautify
alert('Hello')
alert('World')
```
There are cases when a newline does not mean a semicolon. For example:

```js run no-beautify
alert(3 +
1
+ 2);
```

The code outputs `6` because JavaScript does not insert semicolons here. It is intuitively obvious that if the line ends with a plus `"+"`, then it is an "incomplete expression", so the semicolon is not required. And in this case that works as intended.

**But there are situations where JavaScript "fails" to assume a semicolon where it is really needed.**

Errors which occur in such cases are quite hard to find and fix.

We recommend putting semicolons between statements even if they are separated by newlines. This rule is widely adopted by the community. Let's note once again -- *it is possible* to leave out semicolons most of the time. But it's safer -- especially for a beginner -- to use them.

## Comments

As time goes on, programs become more and more complex. It becomes necessary to add *comments* which describe what the code does and why.

Comments can be put into any place of a script. They don't affect its execution because the engine simply ignores them.

**One-line comments start with two forward slash characters `//`.**

The rest of the line is a comment. It may occupy a full line of its own or follow a statement.

Like here:
```js run
// This comment occupies a line of its own
alert('Hello');

alert('World'); // This comment follows the statement
```

**Multiline comments start with a forward slash and an asterisk <code>/&#42;</code> and end with an asterisk and a forward slash <code>&#42;/</code>.**

Like this:

```js run
/* An example with two messages.
This is a multiline comment.
*/
alert('Hello');
alert('World');
```


## Declarations
There are three kinds of declarations in JavaScript.

```js run
var
```
Declares a variable, optionally initializing it to a value.
```js run
let
```
Declares a block-scoped, local variable, optionally initializing it to a value.
```js run
const
```
Declares a block-scoped, read-only named constant.
You use variables as symbolic names for values in your application. The names of variables, called identifiers, conform to certain rules.

A JavaScript identifier must start with a letter, underscore (_), or dollar sign ($); subsequent characters can also be digits (0-9). Because JavaScript is case sensitive, letters include the characters "A" through "Z" (uppercase) and the characters "a" through "z" (lowercase).
## Declaring variables
You can declare a variable in two ways:

With the keyword var. For example, var x = 42. This syntax can be used to declare both local and global variables, depending on the execution context.
With the keyword const or let. For example, let y = 13. This syntax can be used to declare a block-scope local variable. See Variable scope below.
You can also simply assign a value to a variable For example, x = 42. This form creates an undeclared global variable. It also generates a strict JavaScript warning. Undeclared global variables can often lead to unexpected behavior. Thus, it is discouraged to use undeclared global variables.

## Understanding Uninitialized Variables
When JavaScript variables are declared, they have an initial value of undefined. If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number". If you concatenate a string with an undefined variable, you will get a literal string of "undefined".

## Understanding Case Sensitivity in Variables
In JavaScript all variables and function names are case sensitive. This means that capitalization matters.

MYVAR is not the same as MyVar nor myvar. It is possible to have multiple distinct variables with the same name but different casing. It is strongly recommended that for the sake of clarity, you do not use this language feature.

## Add Two Numbers with JavaScript
Number is a data type in JavaScript which represents numeric data.

Now let's try to add two numbers using JavaScript.

JavaScript uses the + symbol as addition operation when placed between two numbers.

```js run no-beautify
myVar = 12 + 6; // assigned 18
```
## Subtract One Number from Another with JavaScript

We can also subtract one number from another.

JavaScript uses the - symbol for subtraction.

Example

```js run no-beautify
myVar = 12 - 6; // assigned 6
```

## Multiply Two Numbers with JavaScript
We can also multiply one number by another.

JavaScript uses the * symbol for multiplication of two numbers.

Example

```js run no-beautify
myVar = 13 * 13; // assigned 169
```


## Divide One Number by Another with JavaScript
We can also divide one number by another.

JavaScript uses the / symbol for division.

Example
```js run
myVar = 16 / 2; // assigned 8
```

## Increment a Number with JavaScript
You can easily increment or add one to a variable with the `++` operator.

```js run
i++;
```

is the equivalent of

```js run
i = i + 1;
```
## Decrement a Number with JavaScript
You can easily decrement or decrease a variable by one with the -- operator.
```js run
i--;
```
is the equivalent of
```js run
i = i - 1;
```

## Create Decimal Numbers with JavaScript
We can store decimal numbers in variables too. Decimal numbers are sometimes referred to as floating point numbers or floats.
For Example
```js run
var ourDecimal = 5.7;
```

## Finding a Remainder in JavaScript
The remainder operator % gives the remainder of the division of two numbers.

Example
```js run
5 % 2 = 1 because
Math.floor(5 / 2) = 2 (Quotient)
2 * 2 = 4
5 - 4 = 1 (Remainder)
```

## Compound Assignment With Augmented Addition
In programming, it is common to use assignments to modify the contents of a variable. Remember that everything to the right of the equals sign is evaluated first, so we can say:
```js run
myVar = myVar + 5;
```

to add 5 to myVar. Since this is such a common pattern, there are operators which do both a mathematical operation and assignment in one step.

One such operator is the += operator.
```js run
var myVar = 1;
myVar += 5;
console.log(myVar); // Returns 6
```

## Compound Assignment With Augmented Subtraction
Like the += operator, -= subtracts a number from a variable.
```js run
myVar = myVar - 5;
```
will subtract 5 from myVar. This can be rewritten as:
```js run
myVar -= 5;
```

## Compound Assignment With Augmented Multiplication
The *= operator multiplies a variable by a number.
```js run
myVar = myVar * 5;
```
will multiply myVar by 5. This can be rewritten as:
```js run
myVar *= 5;
```

## Compound Assignment With Augmented Division
The /= operator divides a variable by another number.
```js run
myVar = myVar / 5;
```
Will divide myVar by 5. This can be rewritten as:
```js run
myVar /= 5;
```

## Declare String Variables
Previously we have used the code
```js run
var myName = "your name";
```
"your name" is called a string literal. It is a string because it is a series of zero or more characters enclosed in single or double quotes.

## Escaping Literal Quotes in Strings
When you are defining a string you must start and end with a single or double quote. What happens when you need a literal quote: `"` or `'`inside of your string?

In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash `(\)` in front of the quote.
```js run
var sampleStr = "Alan said, \"Peter is learning JavaScript\".";
```
This signals to JavaScript that the following quote is not the end of the string, but should instead appear inside the string. So if you were to print this to the console, you would get:

Alan said, "Peter is learning JavaScript".

## Quoting Strings with Single Quotes
String values in JavaScript may be written with single or double quotes, as long as you start and end with the same type of quote. Unlike some other programming languages, single and double quotes work the same in JavaScript.
```js run
doubleQuoteStr = "This is a string"; 
singleQuoteStr = 'This is also a string';
```
The reason why you might want to use one type of quote over the other is if you want to use both in a string. This might happen if you want to save a conversation in a string and have the conversation in quotes. Another use for it would be saving an `<a>` tag with various attributes in quotes, all within a string.
```js run
conversation = 'Finn exclaims to Jake, "Algebraic!"';
```
However, this becomes a problem if you need to use the outermost quotes within it. Remember, a string has the same kind of quote at the beginning and end. But if you have that same quote somewhere in the middle, the string will stop early and throw an error.
```js run
goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
badStr = 'Finn responds, "Let's go!"'; // Throws an error
```
In the goodStr above, you can use both quotes safely by using the backslash \ as an escape character.

## Escape Sequences in Strings
Quotes are not the only characters that can be escaped inside a string. There are two reasons to use escaping characters: First is to allow you to use characters you might not otherwise be able to type out, such as a backspace. Second is to allow you to represent multiple quotes in a string without JavaScript misinterpreting what you mean. We learned this in the previous challenge.
```js run
Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	backspace
\f	form feed
```
Note that the backslash itself must be escaped in order to display as a backslash.

Assign the following three lines of text into the single variable myStr using escape sequences.

FirstLine
    \SecondLine
ThirdLine
You will need to use escape sequences to insert special characters correctly. You will also need to follow the spacing as it looks above, with no spaces between escape sequences or words.

Here is the text with the escape sequences written out.

"FirstLine`newlinetabbackslash`SecondLine`newline`ThirdLine"

## Concatenating Strings with Plus Operator
In JavaScript, when the `+` operator is used with a `String` value, it is called the concatenation operator. You can build a new string out of other strings by concatenating them together.

Example
```js run
'My name is Alan,' + ' I concatenate.'
```

## Concatenating Strings with the Plus Equals Operator
We can also use the += operator to concatenate a string onto the end of an existing string variable. This can be very helpful to break a long string over several lines.

Example
```js run
var ourStr = "I come first. ";
ourStr += "I come second.";
```

## Constructing Strings with Variables
Sometimes you will need to build a string, Mad Libs style. By using the concatenation operator (`+`), you can insert one or more variables into a string you're building.
Example
```js run
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";
```

## Appending Variables to Strings
Just as we can build a string over multiple lines out of string literals, we can also append variables to a string using the plus equals (`+=`) operator.
Example
```js run
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
```

## Finding the Length of a String
You can find the length of a String value by writing .length after the string variable or string literal.
```js run
"Alan Peter".length; // 10
```

## Use Bracket Notation to Find the First Character in a String
Bracket notation is a way to get a character at a specific index within a string.

Most modern programming languages, like JavaScript, don't start counting at 1 like humans do. They start at 0. This is referred to as Zero-based indexing.

For example, the character at index 0 in the word "Charles" is "C". So if,
```js run
var firstName = "Charles"
```
you can get the value of the first letter of the string by using firstName[0].

## Understand String Immutability
In JavaScript, String values are immutable, which means that they cannot be altered once created.

For example, the following code:
```js run
var myStr = "Bob";
myStr[0] = "J";
```
cannot change the value of myStr to "Job", because the contents of myStr cannot be altered. Note that this does not mean that myStr cannot be changed, just that the individual characters of a string literal cannot be changed. The only way to change myStr would be to assign it with a new string, like this:
```js run
var myStr = "Bob";
myStr = "Job";
```

## Store Multiple Values in one Variable using JavaScript Arrays
With JavaScript array variables, we can store several pieces of data in one place.

You start an array declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry, like this:
```js run
var sandwich = ["peanut butter", "jelly", "bread"].
```

## Nest one Array within Another Array
You can also nest arrays within other arrays, like this: `[["Bulls", 23], ["White Sox", 45]]`. This is also called a Multi-dimensional Array.

## Access Array Data with Indexes
We can access the data inside arrays using indexes.

Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use zero-based indexing, so the first element in an array is element 0.

Example
```js 
var array = [50,60,70];
array[0]; // equals 50
var data = array[1]; // equals 60
```

## Modify Array Data With Indexes
Unlike strings, the entries of arrays are mutable and can be changed freely.

Example
``` js run
var ourArray = [50,40,30];
ourArray[0] = 15; // equals [15,40,30]
```

## Access Multi-Dimensional Arrays With Indexes
One way to think of a multi-dimensional array, is as an array of arrays. When you use brackets to access your array, the first set of brackets refers to the entries in the outer-most (the first level) array, and each additional pair of brackets refers to the next level of entries inside.

Example

var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];
arr[3]; // equals [[10,11,12], 13, 14]
arr[3][0]; // equals [10,11,12]
arr[3][0][1]; // equals 11

## Manipulate Arrays With push()
An easy way to append data to the end of an array is via the push() function.

.push() takes one or more parameters and "pushes" them onto the end of the array.
``` js 
var arr = [1,2,3];
arr.push(4);
// arr is now [1,2,3,4]
```

## Manipulate Arrays With pop()
Another way to change the data in an array is with the `.pop()` function.

`.pop()` is used to "pop" a value off of the end of an array. We can store this "popped off" value by assigning it to a variable. In other words, `.pop()` removes the last element from an array and returns that element.

Any type of entry can be "popped" off of an array - numbers, strings, even nested arrays.
```js
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1, 4]
```

## Manipulate Arrays With shift()
`pop()` always removes the last element of an array. What if you want to remove the first?

That's where `.shift()` comes in. It works just like .pop(), except it removes the first element instead of the last. 

## Manipulate Arrays With unshift()
Not only can you shift elements off of the beginning of an array, you can also unshift elements to the beginning of an array i.e. add elements in front of the array.

`.unshift()` works exactly like `.push()`, but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.

## Writing Reusable JavaScript with Functions
In JavaScript, we can divide up our code into reusable parts called functions.

Here's an example of a function:
```js
function functionName() {
  console.log("Hello World");
}
```
You can call or invoke this function by using its name followed by parentheses, like this:
```js
functionName();
```

Each time the function is called it will print out the message "Hello World" on the dev console. All of the code between the curly braces will be executed every time the function is called.

## Passing Values to Functions with Arguments
Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when it is called are known as arguments.

Here is a function with two parameters, param1 and param2:
```js
function testFun(param1, param2) {
  console.log(param1, param2);
}
```
Then we can call testFun:
```js
testFun("Hello", "World");
```
We have passed two arguments, "Hello" and "World". Inside the function, param1 will equal "Hello" and param2 will equal "World". Note that you could call testFun again with different arguments and the parameters would take on the value of the new arguments.

## Global Scope and Functions
In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.

Variables which are used without the `var` keyword are automatically created in the `global` scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with `var`.

## Local Scope and Functions
Variables which are declared within a function, as well as the function parameters have local scope. That means, they are only visible within that function.

Here is a function myTest with a local variable called loc.
```js
function myTest() {
  var loc = "foo";
  console.log(loc);
}
myTest(); // logs "foo"
console.log(loc); // loc is not defined
```
loc is not defined outside of the function.

## Global vs. Local Scope in Functions
It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

In this example:
```js
var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}
```
The function myFun will return "Head" because the local version of the variable is present.

## Return a Value from a Function with Return
We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.

Example
```js
function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5); // 8
```
plusThree takes an argument for num and returns a value equal to `num + 3`.

## Understanding Undefined Value returned from a Function
A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.

Example
```js
var sum = 0;
function addSum(num) {
  sum = sum + num;
}
var returnedValue = addSum(3); // sum will be modified but returned value is undefined
```
`addSum` is a function without a `return` statement. The function will change the global sum variable but the returned value of the function is undefined

## Assignment with a Returned Value
If you'll recall from our discussion of Storing Values with the Assignment Operator, everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.

Assume we have pre-defined a function sum which adds two numbers together, then:
```js
ourSum = sum(5, 12);
```
will call sum function, which returns a value of 17 and assigns it to ourSum variable.

## Understanding Boolean Values
Another data type is the Boolean. Booleans may only be one of two values: true or false. They are basically little on-off switches, where true is "on" and false is "off." These two states are mutually exclusive.

Note
Boolean values are never written with quotes. The strings "true" and "false" are not Boolean and have no special meaning in JavaScript.

##  Use Conditional Logic with If Statements
If statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.

When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.

Pseudocode
```js
if (condition is true) {
  statement is executed
}
```
Example
```js
function test (myCondition) {
  if (myCondition) {
     return "It was true";
  }
  return "It was false";
}
test(true); // returns "It was true"
test(false); // returns "It was false"
```
When test is called with a value of true, the if statement evaluates myCondition to see if it is true or not. Since it is true, the function returns "It was true". When we call test with a value of false, myCondition is not true and the statement in the curly braces is not executed and the function returns "It was false".

## Comparison with the Equality Operator
There are many Comparison Operators in JavaScript. All of these operators return a boolean true or false value.

The most basic operator is the equality operator `==`. The equality operator compares two values and returns true if they're equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the value at the right of the operator to a variable in the left.
```js
function equalityTest(myVal) {
  if (myVal == 10) {
     return "Equal";
  }
  return "Not Equal";
}
```
If myVal is equal to 10, the equality operator returns true, so the code in the curly braces will execute, and the function will return "Equal". Otherwise, the function will return "Not Equal".

In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. This is known as "Type Coercion". Once it does, however, it can compare terms as follows:
```js
1 == 1 // true
1 == 2 // false
1 == '1' // true
"3" == 3 // true
```

## Comparison with the Strict Equality Operator
Strict equality (`===`) is the counterpart to the equality operator (`==`). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

Examples
```js run
3 === 3 // true
3 === '3' // false
```
In the second example, 3 is a Number type and '3' is a String type.

## Comparison with the Inequality Operator
The inequality operator (!=) is the opposite of the equality operator. It means "Not Equal" and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.

Examples
```js
1 != 2 // true
1 != "1" // false
1 != '1' // false
1 != true // false
0 != false // false
```

## Comparison with the Greater Than Operator
The greater than operator (`>`) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.

Like the equality operator, greater than operator will convert data types of values while comparing.

Examples
```js
5 > 3 // true
7 > '3' // true
2 > 3 // false
'1' > 9 // false
```

## Comparison with the Greater Than Or Equal To Operator
The greater than or equal to operator (>=) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false.

Like the equality operator, greater than or equal to operator will convert data types while comparing.

Examples
```js
6 >= 6 // true
7 >= '3' // true
2 >= 3 // false
'7' >= 9 // false
```

## Comparison with the Less Than Operator
The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. Like the equality operator, less than operator converts data types while comparing.

Examples
```js
2 < 5 // true
'3' < 7 // true
5 < 5 // false
3 < 2 // false
'8' < 4 // false
```

##Comparison with the Less Than Or Equal To Operator
The less than or equal to operator (<=) compares the values of two numbers. If the number to the left is less than or equal to the number to the right, it returns true. If the number on the left is greater than the number on the right, it returns false. Like the equality operator, less than or equal to converts data types.

Examples
```js
4 <= 5 // true
'7' <= 7 // true
5 <= 5 // true
3 <= 2 // false
'8' <= 4 // false
```

## Comparisons with the Logical And Operator
Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.

The same effect could be achieved by nesting an if statement inside another if:
```js
if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
```
will only return "Yes" if num is greater than 5 and less than 10. The same logic can be written as:
```js
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
```

## Comparisons with the Logical Or Operator
The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

The logical or operator is composed of two pipe symbols (|). This can typically be found between your Backspace and Enter keys.

The pattern below should look familiar from prior waypoints:
```js
if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
```
will return "Yes" only if num is between 5 and 10 (5 and 10 included). The same logic can be written as:
```js
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
```

##