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

## Length of a String
You can find the length of a String value by writing .length after the string variable or string literal.
 
## Bracket notation 
Bracket notation is a way to get a character at a specific index within a string.
For example, the character at index 0 in the word "Charles" is "C". So if `var firstName = "Charles"`, you can get the value of the first letter of the string by using `firstName[0]`.

## String Immutability
In JavaScript, String values are immutable, which means that they cannot be altered once created.

## JavaScript Arrays
With JavaScript array variables, we can store several pieces of data in one place.You can also nest arrays within other arrays, like this: `[["Bulls", 23], ["White Sox", 45]]`. This is also called a Multi-dimensional Array.We can access the data inside arrays using indexes.

## Object
Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties

## Random Fuction
Random numbers, Math.random() generates a random number between 0 and 1.

## Let Variable Declaration
The var keyword lets you overwrite variable declarations without an error, using let keyword solves the issue.

## Const Declaration
Variables declared using const keyword are read-only, objects (including arrays and functions) assigned to a variable using const are still mutable.

## Object.Freeze
Object.freeze function prevents data mutation

## Anonymous functions
An anonymous function is a function that was declared without any named identifier to refer to it. As such, an anonymous function is usually not accessible after its initial creation.

## Arrow functions
An arrow function expression is a syntactically compact alternative to a regular function expression, although without its own bindings to the this, arguments, super, or new.target keywords. Arrow function expressions are ill suited as methods, and they cannot be used as constructors.

## map()
The map() method creates a new array with the results of calling a provided function on every element in the calling array.

## filter()
The filter() method creates a new array with all elements that pass the test implemented by the provided function.

## reduce()
The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

## Rest operator for variable arguments
The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

## Spread operator 
Spread operator is used to unpack arrays, it spreads the array.

## Math.max()
The Math.max() function returns the largest of zero or more numbers.

## Destructuring Assignment
The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

## Template literals
Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them. They were called "template strings" in prior editions of the ES2015 specification.

## Constructor function
The constructor property returns a reference to the Object constructor function that created the instance object. Note that the value of this property is a reference to the function itself, not a string containing the function's name. The value is only read-only for primitive values such as 1, true and "test".

## Import
The static import statement is used to import bindings which are exported by another module. Imported modules are in strict mode whether you declare them as such or not. The import statement cannot be used in embedded scripts unless such script has a type="module".
There is also a function-like dynamic import(), which does not require scripts of type="module".
Backward compatibility can be ensured using attribute nomodule on the script tag.

## Regular Expressions
Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the exec and test methods of RegExp, and with the match, matchAll, replace, search, and split methods of String. This chapter describes JavaScript regular expressions.
- ## Test method
    The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.
- ## Extract matches
    The match() method retrieves the result of matching a string against a regular expression.
- ## Repeated match
    Find more than one match
- ## Matching wildcards
     Match anything with wildcard period
## Lazy matching
A greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match, by default regular expressions are greedy, the alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern

## Positive and negative look ahead
A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it, on the other hand, a negative lookahead will look to make sure the element in the search pattern is not there.

## Data Structures
Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have; these can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

## Arrays
JavaScript arrays are used to store multiple values in a single variable.

## push()
The push() method adds elements to the end of an array, and unshift() adds elements to the beginning

## pop() 
The pop() removes an element from the end of an array, while shift() removes an element from the beginning
 
## splice(start, deleteCount, ...items)
The splice(start, deleteCount, ...items) removes any number of consecutive elements from anywhere in an array, also appends elements

## indexOf()
Checks for the presence of an element using indexOf()

## every()
The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. 

## forEach()
The forEach() method executes a provided function once for each array element.

## map()
The map() method creates a new array with the results of calling a provided function on every element in the calling array.

## delete command
Deleting object properties.

## keys()
Generate an array of all keys of an object

## endsWith()
The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.

## join()
The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

## substring()
The substring() method returns the part of the string between the start and end indexes, or to the end of the string.

## isNaN()
The isNaN() function determines whether a value is NaN or not. Note: coercion inside the isNaN function has interesting rules; you may alternatively want to use Number.isNaN(), as defined in ECMAScript 2015.

## sort()
The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

## reverse()
The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

## Math.max()
The Math.max() function returns the largest of zero or more numbers.

## Math.min()
The static function Math.min() returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.

## Object oriented programming
OOP (Object-Oriented Programming) is an approach in programming in which data is encapsulated within objects and the object itself is operated on, rather than its component parts.
JavaScript is heavily object-oriented. It follows a prototype-based model (as opposed to class-based).

## Constructor function
All objects (with the exception of objects created with Object.create(null)) will have a constructor property. Objects created without the explicit use of a constructor function (i.e. the object and array literals) will have a constructor property that points to the Fundamental Object constructor type for that object.

## Constructor property
The constructor property returns a reference to the Object constructor function that created the instance object. Note that the value of this property is a reference to the function itself, not a string containing the function's name. The value is only read-only for primitive values such as 1, true and "test".

## Prototype property
When a function is created in JavaScript, JavaScript engine adds a prototype property to the function. This prototype property is an object (called as prototype object) which has a constructor property by default. constructor property points back to the function on which prototype object is a property.

## Manual Prototyping
Manually setting the prototype to a new object erases the constructor property

## Own properties
The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).

## Prototype chain
When we look for a property of an object, the JavaScript engine will first check the object itself for the existence of the property. If not found, it’ll go to the object’s prototype and check that object. If found,it’ll use that property.If not found, it’ll go to the prototype’s prototype, and on and on until it finds an object with a `__proto__` property equal to `null`. So if we were to attempt to lookup the property someProperty on our obj object from above, the engine would first check the object itself.

## Inheritance
Inheritance in most class-based object-oriented languages is a mechanism in which one object acquires all the properties and behaviors of another object. JavaScript is not a class-based language although class keyword is introduced in ES2015, it is just syntactical layer. JavaScript still works on prototype chain.

## Mixin
Using mixin to add common behavior between unrelated objects

## IIFE
An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts. The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.

## Functional Programming
In computer science, functional programming is a programming paradigm or pattern (a style of building the structure and elements of computer programs)
Functional Programming treats computation as the evaluation of mathematical functions.
Functional Programming avoids changing-state and mutable data.

## concat()
To join two windows into one window

## push()
The push() method adds new items to the end of an array, and returns the new length.

## splice()
The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements

## join()
JThe join() method is an inbuilt function in JavaScript which is used to join the elements of an array into a string.The elements of the string will be separated by a specified separator and its default value is comma(, ).

## alert()
Changing or altering things is called mutation, and the outcome is called a side effect. A function, ideally, should be a pure function, meaning that it does not cause any side effects.

## Refactoring global variables out of functions
Don't alter a variable or object - create new variables and objects and return them if need be from a function.Declare function arguments - any computation inside a function depends only on the arguments, and not on any global object or variable.

## filter()
The filter() method creates a new array with all elements that pass the test implemented by the provided function.

## reduce()
The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

## split()
The split() method splits a String object into an array of strings by separating the string into substrings,using a specified separator string to determine where to make each split.

## some()
The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value. 

## Currying and Partial Application
The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1.
Partial application can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments.

## Algorithm scripting
A computer algorithm is a sequence of steps that is followed to achieve a particular outcome. To write an algorithm, you must first understand a problem, and then solve it with coding.
To make solving problems easier, it can be helpful to break them down into many chunks. Then, each chunk can be solved one by one. For example, if you are building a calculator, don't try to solve the problem as a whole. First, consider how to get inputs. Then, determine each arithmetic operation one by one. Finally, display the results.
